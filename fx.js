// ============================
// fx.js — ヒーロー背景「墨の靄」
// 素のWebGL1・依存ライブラリなし・自己完結。
// 失敗時・非対応時は何もせず、CSSの静的な滲み（#hero::before）が残る。
// 有効条件: gsap可用 / reduced-motion でない / 幅860px以上 / WebGL取得成功
// ============================
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hero = document.getElementById('hero');
  var canvas = document.getElementById('hero-canvas');
  if (!hero || !canvas || reduceMotion) return;
  if (typeof gsap === 'undefined') return; // rAFはgsap.tickerに一本化するため必須

  var VERT = [
    'attribute vec2 a_pos;',
    'void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }',
  ].join('\n');

  // fbm 3オクターブの低速ドリフト。paper→accent の2色補間のみ、強度上限0.07
  var FRAG = [
    'precision mediump float;',
    'uniform vec2 u_res;',
    'uniform float u_time;',
    'uniform vec2 u_mouse;',
    'float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }',
    'float noise(vec2 p) {',
    '  vec2 i = floor(p); vec2 f = fract(p);',
    '  vec2 u = f * f * (3.0 - 2.0 * f);',
    '  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),',
    '             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);',
    '}',
    'float fbm(vec2 p) {',
    '  float v = 0.0; float a = 0.5;',
    '  for (int i = 0; i < 3; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }',
    '  return v;',
    '}',
    'void main() {',
    '  vec2 uv = gl_FragCoord.xy / u_res;',
    '  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0) * 1.4;',
    '  p += (u_mouse - 0.5) * 0.1;',
    '  float warp = fbm(p * 0.8 - u_time * 0.01);',
    '  float n = fbm(p + vec2(u_time * 0.02, u_time * 0.013) + warp * 0.35);',
    // 靄の中心を右上に置き、hero-inner（左中央）付近は特に淡く
    '  float fade = 1.0 - smoothstep(0.0, 0.85, distance(uv, vec2(0.72, 0.62)));',
    '  float intensity = n * 0.07 * fade;',
    '  vec3 paper  = vec3(0.969, 0.965, 0.953);',
    '  vec3 accent = vec3(0.639, 0.576, 0.478);',
    '  gl_FragColor = vec4(mix(paper, accent, intensity), 1.0);',
    '}',
  ].join('\n');

  var gl = null;
  var program = null;
  var uRes, uTime, uMouse;
  var running = false;
  var started = false;
  var heroVisible = true;
  var mouse = [0.5, 0.5];
  var mouseTarget = [0.5, 0.5];
  var t0 = 0;

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
    return s;
  }

  function resize() {
    var scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.75;
    var w = Math.max(1, Math.round(hero.clientWidth * scale));
    var h = Math.max(1, Math.round(hero.clientHeight * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      if (gl) gl.viewport(0, 0, w, h);
    }
  }

  function render() {
    if (!gl) return;
    mouse[0] += (mouseTarget[0] - mouse[0]) * 0.03;
    mouse[1] += (mouseTarget[1] - mouse[1]) * 0.03;
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, (performance.now() - t0) / 1000);
    gl.uniform2f(uMouse, mouse[0], mouse[1]);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function play() {
    if (running || !gl) return;
    running = true;
    gsap.ticker.add(render);
  }

  function pause() {
    if (!running) return;
    running = false;
    gsap.ticker.remove(render);
  }

  function updateRunState() {
    if (gl && started && heroVisible && !document.hidden && window.innerWidth >= 860) {
      hero.classList.add('has-webgl');
      play();
    } else {
      if (window.innerWidth < 860) hero.classList.remove('has-webgl');
      pause();
    }
  }

  function teardown() {
    pause();
    hero.classList.remove('has-webgl');
    gl = null;
  }

  function start() {
    if (started) return;
    if (window.innerWidth < 860) return; // リスナーは残るため、後の拡大時に resize ハンドラから再試行される

    gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' });
    if (!gl) return;

    var vs = compile(gl.VERTEX_SHADER, VERT);
    var fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { gl = null; return; }

    program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl = null; return; }
    gl.useProgram(program);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var aPos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    uRes   = gl.getUniformLocation(program, 'u_res');
    uTime  = gl.getUniformLocation(program, 'u_time');
    uMouse = gl.getUniformLocation(program, 'u_mouse');

    canvas.addEventListener('webglcontextlost', function (e) {
      e.preventDefault();
      teardown();
    });

    t0 = performance.now();
    started = true;
    resize();
    updateRunState();
  }

  // ポインタ連動（座標系: 左下原点に合わせ y を反転）
  window.addEventListener('mousemove', function (e) {
    mouseTarget[0] = e.clientX / window.innerWidth;
    mouseTarget[1] = 1 - e.clientY / window.innerHeight;
  }, { passive: true });

  // 画面外・タブ非表示で停止
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      updateRunState();
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', updateRunState);

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (!started && window.innerWidth >= 860) start();
      resize();
      updateRunState();
    }, 200);
  });

  // LCP後に初期化（アイドル時 or load後）
  function boot() {
    if (window.innerWidth < 860) return;
    if ('requestIdleCallback' in window) {
      requestIdleCallback(start, { timeout: 2000 });
    } else {
      setTimeout(start, 300);
    }
  }
  if (document.readyState === 'complete') {
    boot();
  } else {
    window.addEventListener('load', boot);
  }
})();
