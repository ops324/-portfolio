#!/usr/bin/env node
/**
 * build-fonts.mjs — WebFont のサブセット生成
 *
 * ページに実際に現れる文字だけを含む woff2 を fonts/ に書き出す。
 * Google Fonts の css2 API は `text=` パラメータで最適サブセットを返すため、
 * ローカルに fonttools 等のツールチェーンを置かずに生成できる。
 *
 *   node tools/build-fonts.mjs           # 書体ごとに必要な文字だけを含める（既定）
 *   node tools/build-fonts.mjs --union   # 全書体に全文字を含める（ブラウザ不要・約3倍のサイズ）
 *
 * 既定モードは index.html を実際にレンダリングして「どの書体・ウェイトで
 * どの文字が組まれているか」を計測する。明朝の見出しにしか出ない字を
 * ゴシック側に含めずに済むため、--union より大幅に小さくなる。
 *
 * ⚠ テキストを変更したら必ず再実行すること。
 *   サブセットに無い字は WebFont ではなく端末のフォントで描画され、
 *   その字だけ書体が変わる。tools/verify-fonts.mjs で検出できる。
 *
 * 依存: Node 18+。既定モードは playwright と Google Chrome を使う。
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'fonts');
const UNION = process.argv.includes('--union');

/**
 * 生成する書体。style.css の @font-face と 1:1 で対応させること。
 * `stack` は CSS 上でこの書体が現れるフォントスタックの先頭一致パターン。
 */
const FACES = [
  // preload: true はファーストビュー（nav・hero）で必ず使う書体だけに付ける
  { key: 'inter-400',              family: 'Inter',              weight: 400, preload: true  },
  { key: 'inter-500',              family: 'Inter',              weight: 500, preload: true  },
  { key: 'noto-sans-jp-300',       family: 'Noto Sans JP',       weight: 300, preload: true  },
  { key: 'noto-sans-jp-400',       family: 'Noto Sans JP',       weight: 400, preload: false },
  { key: 'shippori-mincho-b1-400', family: 'Shippori Mincho B1', weight: 400, preload: true  },
  { key: 'shippori-mincho-b1-500', family: 'Shippori Mincho B1', weight: 500, preload: false },
];

/**
 * index.html に出てこないが実行時に描画されうる文字。
 * 柱・ノンブル（`.page-marker`）は JS が "02"〜"04" と works / note / contact を
 * 差し込むため、Inter に英小文字と数字を通しておく。
 * かなを丸ごと足すと明朝で約100KB増えるため、意図的に入れていない。
 */
const RUNTIME_EXTRA = {
  // Inter は欧文のみで 7KB 程度と軽いため、ASCII 印字可能文字を丸ごと入れて
  // ラベルの文言変更に耐えるようにする。和文の2書体は高価なので厳密に絞る
  'Inter': Array.from({ length: 0x7e - 0x20 + 1 }, (_, i) => String.fromCharCode(0x20 + i)).join(''),
};

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
         + '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

/** index.html のマークアップから素朴に文字を拾う（--union 用） */
function charsetFromHtml() {
  const html = readFileSync(join(ROOT, 'index.html'), 'utf8')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');
  const set = new Set();
  for (const ch of html.replace(/<[^>]+>/g, '\n')) {
    if (ch.codePointAt(0) >= 0x20) set.add(ch);
  }
  return set;
}

/**
 * 実際にレンダリングして、書体×ウェイトごとの文字集合を得る。
 * 1つのフォントスタックに含まれる文字は、そのスタック上の**全ての**自前書体へ
 * 割り当てる（Inter に CJK を渡しても Google 側が持っていない字は返らないので無害）。
 */
async function charsetsByFace() {
  const { chromium } = await import('playwright');
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await (await browser.newContext()).newPage();
  await page.goto(pathToFileURL(join(ROOT, 'index.html')).href, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);

  const combos = await page.evaluate(() => {
    // ソースが小文字でも text-transform: uppercase なら大文字が描画される。
    // 変換後の文字で集めないとラベル類の大文字がまるごと subset から漏れる
    const transform = (text, tt) => {
      if (tt === 'uppercase') return text.toUpperCase();
      if (tt === 'lowercase') return text.toLowerCase();
      if (tt === 'capitalize') return text.replace(/(^|\s)(\S)/g, (m, a, b) => a + b.toUpperCase());
      return text;
    };
    const map = new Map();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.nodeValue || !node.nodeValue.trim()) continue;
      const el = node.parentElement;
      if (!el || el.closest('script, style')) continue;
      const cs = getComputedStyle(el);
      const key = cs.fontFamily + '||' + cs.fontWeight;
      if (!map.has(key)) map.set(key, new Set());
      const bag = map.get(key);
      for (const ch of transform(node.nodeValue, cs.textTransform)) {
        if (ch.codePointAt(0) >= 0x20) bag.add(ch);
      }
    }
    // 疑似要素の content も拾う
    document.querySelectorAll('*').forEach(el => {
      for (const which of ['::before', '::after']) {
        const cs = getComputedStyle(el, which);
        const c = cs.content;
        if (!c || c === 'none' || c === 'normal') continue;
        const key = cs.fontFamily + '||' + cs.fontWeight;
        if (!map.has(key)) map.set(key, new Set());
        const bag = map.get(key);
        for (const ch of transform(c.replace(/^"|"$/g, ''), cs.textTransform)) {
          if (ch.codePointAt(0) >= 0x20) bag.add(ch);
        }
      }
    });
    return [...map].map(([key, set]) => ({ key, chars: [...set].join('') }));
  });
  await browser.close();

  const byFace = new Map(FACES.map(f => [f.key, new Set()]));
  for (const { key, chars } of combos) {
    const [stack, weightStr] = key.split('||');
    const weight = Number(weightStr);
    for (const face of FACES) {
      if (face.weight !== weight) continue;
      if (!stack.includes(face.family)) continue;
      const bag = byFace.get(face.key);
      for (const ch of chars) bag.add(ch);
    }
  }
  return byFace;
}

async function fetchSubset(face, text) {
  const url = 'https://fonts.googleapis.com/css2'
    + `?family=${encodeURIComponent(face.family)}:wght@${face.weight}`
    + `&text=${encodeURIComponent(text)}`;
  const css = await fetch(url, { headers: { 'User-Agent': UA } }).then(r => {
    if (!r.ok) throw new Error(`${face.family} ${face.weight}: css2 ${r.status}`);
    return r.text();
  });
  // text= で最適化された応答は https://fonts.gstatic.com/l/font?kit=... 形式で
  // 拡張子を持たない。format('woff2') が付いている src だけを拾う
  const m = css.match(/url\((https:\/\/[^)]+)\)\s*format\('woff2'\)/);
  if (!m) throw new Error(`${face.family} ${face.weight}: woff2 の URL が見つからない\n${css.slice(0, 400)}`);
  const buf = Buffer.from(await fetch(m[1], { headers: { 'User-Agent': UA } }).then(r => r.arrayBuffer()));
  // 内容ハッシュをファイル名に入れ、immutable キャッシュを安全に効かせる
  const hash = createHash('sha256').update(buf).digest('hex').slice(0, 8);
  const file = `${face.key}.${hash}.woff2`;
  writeFileSync(join(OUT, file), buf);
  return { size: buf.length, file };
}

/** 生成物に合わせて style.css の @font-face と index.html の preload を書き換える */
function rewriteGenerated(built) {
  const faceCss = built.map(b => `@font-face {
  font-family: '${b.family}';
  font-style: normal;
  font-weight: ${b.weight};
  font-display: swap;
  src: url('fonts/${b.file}') format('woff2');
}`).join('\n\n');

  const cssPath = join(ROOT, 'style.css');
  let css = readFileSync(cssPath, 'utf8');
  const cssRe = /(\/\* @generated:fonts start[^\n]*\n)[\s\S]*?(\/\* @generated:fonts end \*\/)/;
  if (!cssRe.test(css)) throw new Error('style.css に @generated:fonts のマーカーがありません');
  css = css.replace(cssRe, `$1${faceCss}\n$2`);
  writeFileSync(cssPath, css);

  const links = built.filter(b => b.preload).map(b =>
    `  <link rel="preload" as="font" type="font/woff2" crossorigin href="fonts/${b.file}" />`).join('\n');
  const htmlPath = join(ROOT, 'index.html');
  let html = readFileSync(htmlPath, 'utf8');
  const htmlRe = /(  <!-- @generated:fonts start[^\n]*\n)[\s\S]*?(  <!-- @generated:fonts end -->)/;
  if (!htmlRe.test(html)) throw new Error('index.html に @generated:fonts のマーカーがありません');
  html = html.replace(htmlRe, `$1${links}\n$2`);
  writeFileSync(htmlPath, html);
}

let byFace;
if (UNION) {
  const all = charsetFromHtml();
  byFace = new Map(FACES.map(f => [f.key, new Set(all)]));
  console.log('モード: --union（全書体に全文字）');
} else {
  try {
    byFace = await charsetsByFace();
    console.log('モード: 書体別（実レンダリング計測）');
  } catch (e) {
    console.error('ブラウザで計測できませんでした:', e.message);
    console.error('playwright と Google Chrome が要ります。無ければ --union を付けて実行してください。');
    process.exit(1);
  }
}

for (const [family, extra] of Object.entries(RUNTIME_EXTRA)) {
  for (const face of FACES) {
    if (face.family !== family) continue;
    for (const ch of extra) byFace.get(face.key).add(ch);
  }
}

mkdirSync(OUT, { recursive: true });
// 古いハッシュ付きファイルを掃除
for (const f of readdirSync(OUT)) {
  if (f.endsWith('.woff2')) rmSync(join(OUT, f));
}

const built = [];
let total = 0;
for (const face of FACES) {
  const chars = [...byFace.get(face.key)].sort().join('');
  if (!chars) {
    console.log(`  ${face.key.padEnd(24)} — 使用箇所なし。FACES から外せます`);
    continue;
  }
  const { size, file } = await fetchSubset(face, chars);
  total += size;
  built.push({ ...face, file });
  console.log(`  ${file.padEnd(38)} ${String([...chars].length).padStart(4)}字 ${(size / 1024).toFixed(1).padStart(7)} KB`);
}
rewriteGenerated(built);
console.log(`合計 ${(total / 1024).toFixed(1)} KB`);
console.log('style.css の @font-face と index.html の preload を書き換えました。');
