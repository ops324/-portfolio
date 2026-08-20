// ============================
// 依存ライブラリの可用性判定（CDN障害フェイルセーフ）
// gsap / Lenis が読み込めなくても、最低限コンテンツは表示しスライド等は動かす
// ============================
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animReady = typeof gsap !== 'undefined' && typeof Lenis !== 'undefined';
// SplitText は個別判定: 欠落時は該当演出のみ既存の行送りへフォールバック
const splitReady = animReady && typeof SplitText !== 'undefined';
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// reduced-motion 時は autoplay 動画を停止
if (reduceMotion) {
  document.querySelectorAll('video[autoplay]').forEach(v => { try { v.pause(); } catch (e) {} });
}

function revealAllImmediately() {
  const intro = document.getElementById('page-intro');
  if (intro) intro.style.display = 'none';
  document.querySelectorAll(
    '.reveal, .work-card, .work-info, .note-card, .section-line, .hero-sub-inner, .hero-name, .hero-desc-inner, .hero-scroll'
  ).forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
  document.querySelectorAll('.work-thumb.is-veiled').forEach(el => el.classList.remove('is-veiled'));
}

// ============================
// GSAP + Lenis（利用可能な場合のみ）
// ============================
if (animReady) {
  gsap.registerPlugin(ScrollTrigger);

  // 演出の語彙は3つ。①文字のマスク上げ ②面のクリップ展開 ③罫線の伸長。
  // イージングもそれに対応する3種だけを使う（CSS 側の --ease-* と対）
  const EASE = {
    enter: 'power3.out',   // 要素の出現
    veil:  'power2.inOut', // 面の展開・退出
    line:  'expo.out',     // 罫線の伸長
  };
  if (splitReady) gsap.registerPlugin(SplitText);

  // duration と lerp は排他（両方渡すと lerp が優先され duration/easing は無視される）。
  // 追従型の lerp に一本化する
  const lenis = new Lenis({ lerp: reduceMotion ? 1 : 0.1 });

  // Lenis 1.1.14 は window.scrollY をネイティブ更新するため scrollerProxy 不要
  lenis.on('scroll', () => ScrollTrigger.update());

  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.refresh();

  // アンカーリンクを Lenis に委譲
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) lenis.scrollTo(target, { offset: -60 });
    });
  });

  // ============================
  // Navbar scrolled state
  // ============================
  const navbar = document.getElementById('navbar');
  function updateNav() { navbar.classList.toggle('scrolled', window.scrollY > 8); }
  lenis.on('scroll', updateNav);
  updateNav();

  // ============================
  // Helper: スクロールリビール登録
  // reduceMotion 時はアニメーションせず最終状態を即時表示
  // ============================
  function revealOn(trigger, start, animProps, targets) {
    var els = typeof targets === 'string' ? gsap.utils.toArray(targets) : targets;
    if (!els || els.length === 0) return;
    if (reduceMotion) {
      gsap.set(els, { opacity: 1, x: 0, y: 0 });
      return;
    }
    gsap.set(els, { opacity: 0, y: animProps.y || 0, x: animProps.x || 0 });
    ScrollTrigger.create({
      trigger: trigger,
      start: start,
      once: true,
      onEnter: () => {
        gsap.to(els, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: animProps.duration || 0.9,
          stagger: animProps.stagger || 0,
          ease: animProps.ease || EASE.enter,
          overwrite: true,
        });
      },
    });
  }

  // ============================
  // Hero Entrance
  // ============================
  function heroEntrance() {
    const tl = gsap.timeline();

    gsap.set('.hero-sub-inner',  { yPercent: 120 });
    gsap.set('.hero-desc-inner', { yPercent: 100, opacity: 0 });
    gsap.set('.hero-scroll',     { opacity: 0 });
    gsap.set('.hero-line',       { scaleX: 0 });

    tl.to('.hero-sub-inner', { yPercent: 0, duration: 0.9, ease: EASE.enter });

    // 名前: SplitText があれば文字単位のマスク出現、なければ行送り
    if (splitReady) {
      const nameSplit = SplitText.create('.hero-name', { type: 'chars', mask: 'chars', aria: 'auto' });
      tl.from(nameSplit.chars, { yPercent: 115, duration: 1.0, ease: EASE.enter, stagger: 0.06 }, '-=0.55');
    } else {
      gsap.set('.hero-name', { opacity: 0, y: 28 });
      tl.to('.hero-name', { opacity: 1, y: 0, duration: 1.1, ease: EASE.enter }, '-=0.55');
    }

    tl
      .to('.hero-desc-inner', { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: EASE.enter }, '-=0.5')
      .to('.hero-scroll',     { opacity: 1, duration: 1.0, ease: EASE.enter }, '-=0.5')
      .to('.hero-line',       { scaleX: 1, duration: 1.2, ease: EASE.line }, '-=0.9')
      // アニメ完了後に will-change を解除（恒久的な合成レイヤー保持を避ける）
      .add(() => gsap.set('.hero-sub-inner, .hero-name, .hero-desc-inner', { clearProps: 'willChange' }));

    return tl;
  }

  // FOUT対策: SplitText 分割を要する演出はすべてフォント確定後に初期化
  // （1.5s タイムアウトの保険付き。分割前のグリフ幅で計測しないため）
  const fontsReady = Promise.race([
    document.fonts ? document.fonts.ready : Promise.resolve(),
    new Promise(resolve => setTimeout(resolve, 2500)),
  ]);

  // ページロード → ヒーロー
  if (reduceMotion) {
    gsap.set('#page-intro', { scaleY: 0 });
    gsap.set('.hero-sub-inner, .hero-name, .hero-desc-inner, .hero-scroll', { yPercent: 0, y: 0, opacity: 1 });
    gsap.set('.hero-line', { scaleX: 1 });
  } else {
    fontsReady.then(() => {
      const introTl = gsap.timeline();
      introTl
        .to('#page-intro', {
          scaleY: 0,
          duration: 0.9,
          ease: 'expo.inOut',
          delay: 0.1,
          transformOrigin: 'top',
        })
        .add(heroEntrance(), '-=0.3');

      // スクロール指標: 線が上から生まれ、下へ抜けるループ
      const scrollTl = gsap.timeline({ repeat: -1, repeatDelay: 1.1, delay: 2.2 });
      scrollTl
        .set('.hero-scroll-line', { transformOrigin: 'top', scaleY: 0 })
        .to('.hero-scroll-line', { scaleY: 1, duration: 0.9, ease: EASE.veil })
        .set('.hero-scroll-line', { transformOrigin: 'bottom' })
        .to('.hero-scroll-line', { scaleY: 0, duration: 0.9, ease: EASE.veil, delay: 0.25 });
    });
  }

  // ============================
  // Scroll Reveals (.reveal)
  // sec-head は SplitText 可用時に専用演出（下記）へ委譲
  // ============================
  gsap.utils.toArray('.reveal').forEach(el => {
    if (splitReady && !reduceMotion && el.classList.contains('sec-head')) return;
    revealOn(el, 'top 88%', { y: 18, duration: 0.9 }, [el]);
  });

  // ============================
  // Section Headers（eyebrowトラッキング収束＋明朝題字のblur→focus）
  // ============================
  if (splitReady && !reduceMotion) fontsReady.then(() => {
    gsap.utils.toArray('.sec-head').forEach(head => {
      const eyebrow = head.querySelector('.sec-eyebrow');
      const title   = head.querySelector('.sec-title');
      if (!eyebrow || !title) return;
      // ヒーローの名前と同じ「マスク上げ」に統一する。
      // blur→focus は語彙としても既視感が強いため用いない
      const split = SplitText.create(title, { type: 'chars', mask: 'chars', aria: 'auto' });
      gsap.set(eyebrow, { opacity: 0 });
      ScrollTrigger.create({
        trigger: head,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(eyebrow, { opacity: 1, duration: 0.9, ease: EASE.enter });
          gsap.from(split.chars, {
            yPercent: 110,
            duration: 0.9, stagger: 0.07, ease: EASE.enter, delay: 0.08,
          });
        },
      });
    });
  });

  // ============================
  // Section Border Lines
  // ============================
  gsap.utils.toArray('.section-line').forEach(line => {
    if (reduceMotion) { gsap.set(line, { scaleX: 1 }); return; }
    gsap.set(line, { scaleX: 0 });
    ScrollTrigger.create({
      trigger: line,
      start: 'top 98%',
      once: true,
      onEnter: () => gsap.to(line, { scaleX: 1, duration: 1.0, ease: EASE.line, overwrite: true }),
    });
  });

  // ============================
  // About Section
  // ============================
  revealOn('#about', 'top 80%', { y: 16, duration: 0.8 }, '.about-eyebrow');
  revealOn('#about', 'top 74%', { y: 14, duration: 0.8 }, '.about-meta-row');
  revealOn('#about', 'top 68%', { y: 12, duration: 0.7 }, '.about-divider');
  revealOn('#about', 'top 55%', { y: 8,  duration: 0.7 }, '.about-text--sub');

  // ============================
  // Works Cards (交互スライドイン)
  // ============================
  const workCards = document.querySelectorAll('.work-card');

  workCards.forEach(card => {
    const thumb = card.querySelector('.work-thumb');
    const info  = card.querySelector('.work-info');

    if (reduceMotion) { gsap.set(card, { opacity: 1, x: 0 }); return; }

    // ②面のクリップ展開（CSS の transition に委ねる）
    if (thumb) thumb.classList.add('is-veiled');
    // 交互スライドインは語彙を増やすだけなので廃し、面と文字だけで見せる
    gsap.set(card, { opacity: 1, x: 0 });
    gsap.set(info, { opacity: 0, y: 14 });

    fontsReady.then(() => {
      // ①題字のマスク上げ: 単一行に収まる場合のみ（複数行はCJK折返しを乱すため素通し）
      let titleSplit = null;
      if (splitReady) {
        const titleEl = card.querySelector('.work-title');
        const lineH = titleEl ? parseFloat(getComputedStyle(titleEl).lineHeight) || 0 : 0;
        if (titleEl && lineH > 0 && titleEl.getBoundingClientRect().height < lineH * 1.5) {
          titleSplit = SplitText.create(titleEl, { type: 'chars', mask: 'chars', aria: 'auto' });
          gsap.set(titleSplit.chars, { yPercent: 110 });
        }
      }

      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          if (thumb) thumb.classList.remove('is-veiled');
          gsap.to(info, { opacity: 1, y: 0, duration: 0.9, ease: EASE.enter, delay: 0.15, overwrite: true });
          if (titleSplit) {
            gsap.to(titleSplit.chars, {
              yPercent: 0, duration: 0.8, stagger: 0.05, ease: EASE.enter, delay: 0.3,
            });
          }
        },
      });
    });
  });

  // GSAP ホバー（画像を overflow: hidden 内でズーム）
  if (!reduceMotion) {
    workCards.forEach(card => {
      const imgs = card.querySelectorAll('.work-thumb-img');

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -4,     duration: 0.4, ease: EASE.enter });
        gsap.to(imgs, { scale: 1.05, duration: 0.6, ease: EASE.enter });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0,   duration: 0.5, ease: EASE.veil });
        gsap.to(imgs, { scale: 1, duration: 0.6, ease: EASE.veil });
      });
    });
  }

  // ============================
  // Hero Parallax (desktop only)
  // ============================
  if (!reduceMotion && !window.matchMedia('(max-width: 860px)').matches) {
    gsap.to('.hero-name', {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
    gsap.to('.hero-desc', {
      yPercent: -6,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }

  // ============================
  // Note Cards Stagger
  // ============================
  (function() {
    const noteCards = gsap.utils.toArray('.note-card');
    if (reduceMotion) { gsap.set(noteCards, { opacity: 1, y: 0 }); return; }
    gsap.set(noteCards, { opacity: 0, y: 10 });
    ScrollTrigger.create({
      trigger: '#note',
      start: 'top 75%',
      once: true,
      onEnter: () => gsap.to(noteCards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: EASE.enter,
        onComplete: () => gsap.set(noteCards, { clearProps: 'opacity,y' }),
      }),
    });
  })();

  // ============================
  // Magnetic Hover（小面積の要素のみ・引力係数0.3）
  // slide-prev/next は CSS transform(translateY) と競合するため対象外
  // ============================
  function initMagnetic() {
    // ナビは動かさない。読みにくく、静かな下線のほうが上品に効く。
    // 大きな単独ターゲットにだけ残す
    document.querySelectorAll('.contact-link, .footer-top-link').forEach(el => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.3);
        yTo((e.clientY - r.top - r.height / 2) * 0.3);
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' });
      });
    });
  }

  if (finePointer && !reduceMotion) {
    initMagnetic();
  }
} else {
  // gsap / Lenis 未読込: コンテンツを即時表示（ネイティブスクロールにフォールバック）
  revealAllImmediately();
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const updateNav = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }
}

// ============================
// Active Nav Link + Page Marker（gsap 非依存・常時動作）
// ============================
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

// 柱・ノンブル: セクションid → 表記
const pageMarker      = document.querySelector('.page-marker');
const pageMarkerNo    = document.querySelector('.page-marker-no');
const pageMarkerTitle = document.querySelector('.page-marker-title');
const PAGE_INDEX = {
  about:    ['01', 'about'],
  projects: ['02', 'works'],
  note:     ['03', 'note'],
  contact:  ['04', 'contact'],
};

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + entry.target.id) {
          a.classList.add('active');
        }
      });
      if (pageMarker) {
        const page = PAGE_INDEX[entry.target.id];
        if (page) {
          pageMarkerNo.textContent = page[0];
          pageMarkerTitle.textContent = page[1];
          pageMarker.classList.add('visible');
        } else {
          pageMarker.classList.remove('visible'); // hero では非表示
        }
      }
    }
  });
}, {
  // ビューポート中央帯（上下45%を除外）との交差で判定。
  // works等の縦長セクションは threshold 比率だと届かないため中央線基準にする
  rootMargin: '-45% 0px -45% 0px',
  threshold: 0,
});

sections.forEach(s => activeObserver.observe(s));

// ============================
// 配色の同期（夜明け＝紙／日没＝夜）
// 太陽の位置は <head> のインライン（@solar）が持つ。初回描画前に確定させる必要が
// あるためで、ここが担うのは「境界をまたいだら差し替える」ことだけ
// ============================
(function solarTheme() {
  const solar = window.__solarTheme;
  if (!solar) return;

  // 旧「紙／夜」トグルの記憶。もう読まないので残骸を掃除する
  try { localStorage.removeItem('theme'); } catch (e) {}

  let timer = 0;

  function refresh() {
    const at = solar.place();
    const state = solar.solve(Date.now(), at.lat, at.lng);
    if (solar.apply(state.theme)) {
      document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: state.theme } }));
    }
    // 端末のスリープでタイマーは飛ぶ。上限6時間で切り、復帰時のイベントでも取り直す
    clearTimeout(timer);
    timer = setTimeout(refresh, Math.min(Math.max(state.next - Date.now(), 1000), 6 * 3600 * 1000));
  }

  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
  window.addEventListener('pageshow', refresh);
  refresh();
})();

// ============================
// 約物の視覚補正（詰め組みの代替）
// Shippori Mincho B1 は palt / chws / halt を一切持たないため、
// フォント機能でも text-spacing-trim でも約物の空きを詰められない。
// 明朝で組む短文に限り、句読点の後ろの半角相当の空きを margin で回収する。
// 本文（Noto Sans JP）は palt が効くので対象外。SplitText 対象の見出し・題字は
// 約物を含まないため干渉しない。
// ============================
(function kernPunctuation() {
  const PULL = '、。';
  const targets = document.querySelectorAll('.work-catchcopy, .about-text-line, .contact-lead');

  targets.forEach(el => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) texts.push(walker.currentNode);

    texts.forEach(node => {
      if (!/[、。]/.test(node.nodeValue)) return;
      const frag = document.createDocumentFragment();
      let buf = '';
      for (const ch of node.nodeValue) {
        if (PULL.includes(ch)) {
          if (buf) { frag.appendChild(document.createTextNode(buf)); buf = ''; }
          const span = document.createElement('span');
          span.className = 'kern-pull';
          span.textContent = ch;
          frag.appendChild(span);
        } else {
          buf += ch;
        }
      }
      if (buf) frag.appendChild(document.createTextNode(buf));
      node.parentNode.replaceChild(frag, node);
    });
  });
})();

// ============================
// Work Card — 題字リンクへのクリック委譲（gsap 非依存・常時動作）
// カード全体をクリック可能にしつつ、a 内 button の不正ネストを避けるための処置。
// 本文のテキスト選択中・コントロール操作中は発火させない
// ============================
document.querySelectorAll('.work-card').forEach(card => {
  const link = card.querySelector('.work-link');
  if (!link) return;
  card.addEventListener('click', e => {
    if (e.target.closest('a, button')) return;
    const sel = window.getSelection();
    if (sel && sel.toString().length > 0) return;
    link.click();
  });
});

// ============================
// Manual Slideshow（gsap 非依存・常時動作 / タッチスワイプ対応）
// ============================
document.querySelectorAll('.work-thumb[data-slide]').forEach(thumb => {
  const imgs    = thumb.querySelectorAll('.work-thumb-img');
  const dots    = thumb.querySelectorAll('.slide-dot');
  const prevBtn = thumb.querySelector('.slide-prev');
  const nextBtn = thumb.querySelector('.slide-next');
  const status  = thumb.querySelector('[data-slide-status]');
  let current = 0;

  if (imgs.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    thumb.querySelector('.slide-dots').style.display = 'none';
    if (status) status.remove();
    return;
  }

  // 各ドットに名前と現在位置を与える（従来は span でキーボード操作不可だった）
  dots.forEach((dot, i) => {
    dot.setAttribute('aria-label', (i + 1) + '枚目を表示');
    dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
  });

  function goTo(n) {
    imgs[current].classList.remove('active');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-current', 'false');
    current = (n + imgs.length) % imgs.length;
    imgs[current].classList.add('active');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-current', 'true');
    if (status) status.textContent = (current + 1) + ' / ' + imgs.length;
  }

  prevBtn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); goTo(current - 1); });
  nextBtn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); goTo(current + 1); });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); goTo(i); });
  });

  // タッチスワイプ
  let touchStartX = 0;
  let touchStartY = 0;
  thumb.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });
  thumb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    // 横方向の明確なスワイプのみ（縦スクロールと誤検知しない）
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      goTo(dx < 0 ? current + 1 : current - 1);
    }
  }, { passive: true });
});
