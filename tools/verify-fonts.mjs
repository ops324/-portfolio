#!/usr/bin/env node
/**
 * verify-fonts.mjs — サブセット漏れの検出
 *
 *   node tools/verify-fonts.mjs [url]        # 既定 http://localhost:3000
 *
 * サブセットに無い字は WebFont ではなく端末のフォントで描画されるが、
 * 見た目が似ていると気付きにくい。CDP の CSS.getPlatformFontsForNode で
 * 「実際にどのフォントで描かれたか」を要素ごとに問い合わせ、
 * 自前の書体以外が使われていたら落とす。
 *
 * テキストを変更したら build-fonts.mjs → verify-fonts.mjs の順に回すこと。
 */
import { chromium } from 'playwright';

const URL = process.argv[2] || 'http://localhost:3000';
// Chrome は "Inter Medium" / "Noto Sans JP Light" のようにスタイル名込みで返すため前方一致で見る
const OURS = ['Inter', 'Noto Sans JP', 'Shippori Mincho B1'];
const isOurs = name => OURS.some(o => name === o || name.startsWith(o + ' '));

const browser = await chromium.launch({ channel: 'chrome' });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
const cdp = await context.newCDPSession(page);

await page.goto(URL, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
// 遅延読み込みと下部セクションも評価対象に入れる
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1200);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);

await cdp.send('DOM.enable');
await cdp.send('CSS.enable');
const { root } = await cdp.send('DOM.getDocument', { depth: -1, pierce: false });

/** テキストを持つ要素の nodeId を集める */
const { nodeIds } = await cdp.send('DOM.querySelectorAll', {
  nodeId: root.nodeId,
  selector: 'body *:not(script):not(style):not(.sr-only)',
});

const offenders = new Map();   // familyName -> 例
let checked = 0;

for (const nodeId of nodeIds) {
  let res;
  try {
    res = await cdp.send('CSS.getPlatformFontsForNode', { nodeId });
  } catch {
    continue;
  }
  if (!res.fonts || !res.fonts.length) continue;
  checked++;
  for (const f of res.fonts) {
    if (f.glyphCount === 0) continue;
    if (isOurs(f.familyName)) continue;
    if (!offenders.has(f.familyName)) {
      let sample = '';
      try {
        const { object } = await cdp.send('DOM.resolveNode', { nodeId });
        const { result } = await cdp.send('Runtime.callFunctionOn', {
          objectId: object.objectId,
          functionDeclaration: 'function () { return this.tagName + "." + this.className + " : " + (this.textContent||"").trim().slice(0,50); }',
          returnByValue: true,
        });
        sample = result.value;
      } catch {}
      offenders.set(f.familyName, { glyphCount: f.glyphCount, sample });
    }
  }
}

await browser.close();

console.log(`検査した要素: ${checked}`);
if (offenders.size === 0) {
  console.log('✅ すべて自前の書体で描画されています（サブセット漏れなし）');
  process.exit(0);
}
console.log('❌ 自前の書体以外で描画された箇所があります:');
for (const [family, info] of offenders) {
  console.log(`   ${family}  ${info.glyphCount}グリフ  例: ${info.sample}`);
}
console.log('\ntools/build-fonts.mjs を再実行してください。');
process.exit(1);
