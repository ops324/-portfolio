#!/usr/bin/env node
/**
 * verify-solar.mjs — 配色の日出没同期の検算
 *
 *   node tools/verify-solar.mjs
 *
 * `index.html` の `@solar` マーカー間（配色を夜明け・日没に合わせるインライン）を
 * そのまま取り出して実行し、太陽の計算と配色の決定を突き合わせる。
 *
 * この機能の壊れ方は目で見て気付けない。数分ずれても、季節で狂っても、
 * 「見た瞬間の配色」はそれらしく出てしまい、間違いは半日後にしか現れない。
 * ブラウザを起動する必要のない純粋な計算なので、ここで数値を固定しておく。
 *
 * 依存なし（Node 18+）。
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// ---------------------------------------------------------------- 取り出し
const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
const block = html.match(/\/\* @solar start[\s\S]*?\/\* @solar end \*\//);
if (!block) {
  console.error('✗ index.html に @solar ブロックが見つからない（マーカーを消していないか）');
  process.exit(1);
}

/** DOM を持たない環境で @solar を走らせるための最小スタブ */
function sandbox() {
  const attrs = new Map();
  const el = () => ({
    id: '',
    _attrs: new Map(),
    setAttribute(k, v) { this._attrs.set(k, v); },
    getAttribute(k) { return this._attrs.has(k) ? this._attrs.get(k) : null; },
  });
  const metas = [];
  const documentStub = {
    documentElement: {
      setAttribute: (k, v) => attrs.set(k, v),
      getAttribute: (k) => (attrs.has(k) ? attrs.get(k) : null),
    },
    head: {
      querySelectorAll: () => metas.filter(m => m.getAttribute('name') === 'theme-color'),
      appendChild: (m) => metas.push(m),
    },
    getElementById: (id) => metas.find(m => m.id === id) || null,
    createElement: el,
  };
  const windowStub = {};
  new Function('window', 'document', block[0])(windowStub, documentStub);
  return { solar: windowStub.__solarTheme, attrs, metas };
}

const { solar, attrs, metas } = sandbox();

// ---------------------------------------------------------------- 検査の枠
const failures = [];
function check(name, fn) {
  try {
    const detail = fn();
    console.log(`  ✓ ${name}${detail ? ` — ${detail}` : ''}`);
  } catch (e) {
    failures.push(name);
    console.log(`  ✗ ${name} — ${e.message}`);
  }
}
function eq(actual, expected, tol, unit = '') {
  if (Math.abs(actual - expected) > tol) {
    throw new Error(`期待 ${expected}${unit} ±${tol}${unit} に対し ${actual}${unit}`);
  }
}

const MIN = 60000;
/** UTC ミリ秒を、指定の時差（時）のローカル時刻 'HH:MM' として読む */
const clock = (ms, tzHours) => new Date(ms + tzHours * 3600000).toISOString().slice(11, 16);
/** 'HH:MM'（時差込み）を UTC ミリ秒に直す */
const local = (day, hhmm, tzHours) => Date.parse(`${day}T${hhmm}:00Z`) - tzHours * 3600000;

// 国立天文台の「東京」（北緯35°39′29″・東経139°44′29″）
const TOKYO = { lat: 35.6581, lng: 139.7414, tz: 9 };
const TROMSO = { lat: 69.6492, lng: 18.9553, tz: 1 };

console.log('\n@solar の検算\n');

// ---------------------------------------------------------------- 日出没の実測合わせ
// 国立天文台の暦（東京）と突き合わせる。@solar は簡略式（中心差3項・平均黄道傾斜）で
// 章動や年周光行差を持たないため実測とは1〜2分ずれる。配色の切替には十分だが、
// 定数や符号を壊すと分単位では済まなくなるので、許容は3分に切って番人にする。
check('東京の夏至（2026-06-21）が暦の 04:25 / 19:00 JST と3分以内', () => {
  const e = solar.events(local('2026-06-21', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  eq(e.rise, local('2026-06-21', '04:25', TOKYO.tz), 3 * MIN);
  eq(e.set, local('2026-06-21', '19:00', TOKYO.tz), 3 * MIN);
  return `${clock(e.rise, TOKYO.tz)} / ${clock(e.set, TOKYO.tz)}`;
});

check('東京の冬至（2026-12-21）が暦の 06:47 / 16:32 JST と3分以内', () => {
  const e = solar.events(local('2026-12-21', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  eq(e.rise, local('2026-12-21', '06:47', TOKYO.tz), 3 * MIN);
  eq(e.set, local('2026-12-21', '16:32', TOKYO.tz), 3 * MIN);
  return `${clock(e.rise, TOKYO.tz)} / ${clock(e.set, TOKYO.tz)}`;
});

// ---------------------------------------------------------------- 性質の検査
check('春分の昼の長さが約12時間05分（大気差・視半径のぶん12時間を超える）', () => {
  const e = solar.events(local('2026-03-20', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  eq((e.set - e.rise) / MIN, 725, 10, '分');
  return `${Math.round((e.set - e.rise) / MIN)}分`;
});

check('日出没が南中を挟んで対称', () => {
  const e = solar.events(local('2026-09-08', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  eq(e.transit - e.rise, e.set - e.transit, 1000, 'ms');
});

check('夏至の昼が冬至より4時間以上長い', () => {
  const s = solar.events(local('2026-06-21', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  const w = solar.events(local('2026-12-21', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  const diff = ((s.set - s.rise) - (w.set - w.rise)) / 3600000;
  if (diff < 4) throw new Error(`差が ${diff.toFixed(2)} 時間しかない`);
  return `${diff.toFixed(2)} 時間差`;
});

check('経度を15°東へ振ると日出没が1時間早まる（経度→時刻の換算）', () => {
  const base = local('2026-05-05', '12:00', TOKYO.tz);
  const a = solar.events(base, TOKYO.lat, 135);
  const b = solar.events(base, TOKYO.lat, 150);
  eq((a.rise - b.rise) / MIN, 60, 1, '分');
  eq((a.set - b.set) / MIN, 60, 1, '分');
});

// ---------------------------------------------------------------- 極地（境界が無い日）
check('トロムソの夏至は白夜（境界なし）で紙', () => {
  const at = local('2026-06-21', '12:00', TROMSO.tz);
  const e = solar.events(at, TROMSO.lat, TROMSO.lng);
  if (e.rise !== null || e.up !== true) throw new Error('白夜として扱われていない');
  const s = solar.solve(at, TROMSO.lat, TROMSO.lng);
  if (s.theme !== 'light') throw new Error(`theme=${s.theme}`);
  if (s.next <= at) throw new Error('再判定の時刻が過去');
});

check('トロムソの冬至は極夜（境界なし）で夜', () => {
  const at = local('2026-12-21', '12:00', TROMSO.tz);
  const e = solar.events(at, TROMSO.lat, TROMSO.lng);
  if (e.rise !== null || e.up !== false) throw new Error('極夜として扱われていない');
  const s = solar.solve(at, TROMSO.lat, TROMSO.lng);
  if (s.theme !== 'dark') throw new Error(`theme=${s.theme}`);
});

// ---------------------------------------------------------------- 配色の決定
check('東京の正午は紙・次の切替は当日の日没', () => {
  const at = local('2026-06-21', '12:00', TOKYO.tz);
  const s = solar.solve(at, TOKYO.lat, TOKYO.lng);
  const e = solar.events(at, TOKYO.lat, TOKYO.lng);
  if (s.theme !== 'light') throw new Error(`theme=${s.theme}`);
  eq(s.next, e.set, 1000, 'ms');
  return `次は ${clock(s.next, TOKYO.tz)}`;
});

check('東京の真夜中は夜・次の切替は当日の日の出', () => {
  const at = local('2026-06-21', '00:30', TOKYO.tz);
  const s = solar.solve(at, TOKYO.lat, TOKYO.lng);
  const e = solar.events(local('2026-06-21', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  if (s.theme !== 'dark') throw new Error(`theme=${s.theme}`);
  eq(s.next, e.rise, 1000, 'ms');
  return `次は ${clock(s.next, TOKYO.tz)}`;
});

check('日出没の前後1分で配色が入れ替わる', () => {
  const e = solar.events(local('2026-06-21', '12:00', TOKYO.tz), TOKYO.lat, TOKYO.lng);
  const around = (t, d) => solar.solve(t + d, TOKYO.lat, TOKYO.lng).theme;
  if (around(e.rise, -MIN) !== 'dark' || around(e.rise, MIN) !== 'light') throw new Error('夜明けで紙にならない');
  if (around(e.set, -MIN) !== 'light' || around(e.set, MIN) !== 'dark') throw new Error('日没で夜にならない');
});

check('1年365日どこで切っても配色と次の切替が矛盾しない', () => {
  const start = local('2026-01-01', '00:00', TOKYO.tz);
  for (let i = 0; i < 365 * 4; i++) {          // 6時間刻み
    const at = start + i * 6 * 3600000;
    const s = solar.solve(at, TOKYO.lat, TOKYO.lng);
    if (s.theme !== 'light' && s.theme !== 'dark') throw new Error(`不正な theme=${s.theme}`);
    if (s.next <= at) throw new Error(`次の切替が過去（${new Date(at).toISOString()}）`);
    if (s.next - at > 25 * 3600000) throw new Error(`次の切替が遠すぎる（${new Date(at).toISOString()}）`);
    // 切替の直後は、必ず反対の配色になっている
    if (solar.solve(s.next + 1000, TOKYO.lat, TOKYO.lng).theme === s.theme) {
      throw new Error(`切替時刻をまたいでも変わらない（${new Date(at).toISOString()}）`);
    }
  }
  return '1460点';
});

// ---------------------------------------------------------------- 端末側の取り回し
check('経度をタイムゾーンの時差から起こす', () => {
  const at = solar.place();
  const expected = -new Date().getTimezoneOffset() / 4;
  eq(at.lng, expected, 0.001, '°');
  if (Math.abs(at.lat) > 66.5) throw new Error(`既定の緯度が極圏（${at.lat}）`);
  return `lat ${at.lat} / lng ${at.lng}`;
});

check('apply が data-theme と theme-color を立て、同じ値では再通知しない', () => {
  if (solar.apply('dark') !== true) throw new Error('初回の適用で true が返らない');
  if (attrs.get('data-theme') !== 'dark') throw new Error('data-theme が立たない');
  if (solar.apply('dark') !== false) throw new Error('同じ配色でも true を返す（無駄な themechange が飛ぶ）');
  if (solar.apply('light') !== true) throw new Error('切替で true が返らない');
  const meta = metas.find(m => m.id === 'theme-color');
  if (!meta) throw new Error('theme-color の meta が作られない');
  if (meta.getAttribute('content') !== '#f7f6f3') throw new Error(`content=${meta.getAttribute('content')}`);
  return 'data-theme / theme-color とも追従';
});

// ---------------------------------------------------------------- 実装の取りこぼし
check('紙／夜のトグルが残っていない', () => {
  const strays = ['theme-switch', 'data-theme-set', "localStorage.getItem('theme')"]
    .filter(t => html.includes(t));
  if (strays.length) throw new Error(`index.html に残骸: ${strays.join(' / ')}`);
});

console.log('');
if (failures.length) {
  console.error(`✗ ${failures.length} 件が不一致\n`);
  process.exit(1);
}
console.log('✓ すべて一致\n');
