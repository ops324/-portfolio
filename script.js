// ============================
// 依存ライブラリの可用性判定（CDN障害フェイルセーフ）
// gsap / Lenis が読み込めなくても、最低限コンテンツは表示しスライド等は動かす
// ============================
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animReady = typeof gsap !== 'undefined' && typeof Lenis !== 'undefined';

// reduced-motion 時は autoplay 動画を停止
if (reduceMotion) {
  document.querySelectorAll('video[autoplay]').forEach(v => { try { v.pause(); } catch (e) {} });
}

function revealAllImmediately() {
  const intro = document.getElementById('page-intro');
  if (intro) intro.style.display = 'none';
  document.querySelectorAll(
    '.reveal, .work-card, .note-card, .section-line, .hero-sub-inner, .hero-name-inner, .hero-desc-inner'
  ).forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
}

// ============================
// GSAP + Lenis（利用可能な場合のみ）
// ============================
if (animReady) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: reduceMotion ? 0 : 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    lerp: 0.1,
  });

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
          ease: animProps.ease || 'power2.out',
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
    gsap.set('.hero-name-inner', { yPercent: 110 });
    gsap.set('.hero-desc-inner', { yPercent: 100, opacity: 0 });
    gsap.set('.hero-line',       { scaleX: 0 });

    tl
      .to('.hero-sub-inner',  { yPercent: 0, duration: 0.9, ease: 'power3.out' })
      .to('.hero-name-inner', { yPercent: 0, duration: 1.1, ease: 'power4.out' }, '-=0.55')
      .to('.hero-desc-inner', { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power2.out' }, '-=0.5')
      .to('.hero-line',       { scaleX: 1, duration: 1.2, ease: 'expo.out' }, '-=0.6')
      // アニメ完了後に will-change を解除（恒久的な合成レイヤー保持を避ける）
      .add(() => gsap.set('.hero-sub-inner, .hero-name-inner, .hero-desc-inner', { clearProps: 'willChange' }));

    return tl;
  }

  // ページロード → ヒーロー
  if (reduceMotion) {
    gsap.set('#page-intro', { scaleY: 0 });
    gsap.set('.hero-sub-inner, .hero-name-inner, .hero-desc-inner', { yPercent: 0, opacity: 1 });
    gsap.set('.hero-line', { scaleX: 1 });
  } else {
    const introTl = gsap.timeline();
    introTl
      .to('#page-intro', {
        scaleY: 0,
        duration: 0.9,
        ease: 'expo.inOut',
        delay: 0.15,
        transformOrigin: 'top',
      })
      .add(heroEntrance(), '-=0.3');
  }

  // ============================
  // Scroll Reveals (.reveal)
  // ============================
  gsap.utils.toArray('.reveal').forEach(el => {
    revealOn(el, 'top 88%', { y: 18, duration: 0.9 }, [el]);
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
      onEnter: () => gsap.to(line, { scaleX: 1, duration: 1.0, ease: 'expo.out', overwrite: true }),
    });
  });

  // ============================
  // About Section
  // ============================
  revealOn('#about', 'top 80%', { y: 16, duration: 0.8 }, '.about-eyebrow');
  revealOn('#about', 'top 74%', { y: 14, duration: 0.8 }, '.about-meta-row');
  revealOn('#about', 'top 68%', { y: 12, duration: 0.7 }, '.about-divider');
  revealOn('#about', 'top 62%', { y: 10, duration: 0.7, stagger: 0.13 }, '.about-text-line');
  revealOn('#about', 'top 55%', { y: 8,  duration: 0.7 }, '.about-text--sub');

  // ============================
  // Works Cards (交互スライドイン)
  // ============================
  const workCards = document.querySelectorAll('.work-card');

  workCards.forEach((card, i) => {
    if (reduceMotion) { gsap.set(card, { opacity: 1, x: 0 }); return; }
    const xDir = i % 2 === 0 ? -24 : 24;
    gsap.set(card, { opacity: 0, x: xDir });
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      once: true,
      onEnter: () => gsap.to(card, { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out', overwrite: true }),
    });
  });

  // GSAP ホバー（画像を overflow: hidden 内でズーム）
  if (!reduceMotion) {
    workCards.forEach(card => {
      const imgs = card.querySelectorAll('.work-thumb-img');

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -4,     duration: 0.4, ease: 'power2.out' });
        gsap.to(imgs, { scale: 1.05, duration: 0.6, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0,   duration: 0.5, ease: 'power2.inOut' });
        gsap.to(imgs, { scale: 1, duration: 0.6, ease: 'power2.inOut' });
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
        ease: 'power2.out',
        onComplete: () => gsap.set(noteCards, { clearProps: 'opacity,y' }),
      }),
    });
  })();
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
  events:   ['03', 'events'],
  note:     ['04', 'note'],
  contact:  ['05', 'contact'],
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
}, { threshold: 0.4 });

sections.forEach(s => activeObserver.observe(s));

// ============================
// Manual Slideshow（gsap 非依存・常時動作 / タッチスワイプ対応）
// ============================
document.querySelectorAll('.work-thumb[data-slide]').forEach(thumb => {
  const imgs    = thumb.querySelectorAll('.work-thumb-img');
  const dots    = thumb.querySelectorAll('.slide-dot');
  const prevBtn = thumb.querySelector('.slide-prev');
  const nextBtn = thumb.querySelector('.slide-next');
  let current = 0;

  if (imgs.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    thumb.querySelector('.slide-dots').style.display = 'none';
    return;
  }

  function goTo(n) {
    imgs[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + imgs.length) % imgs.length;
    imgs[current].classList.add('active');
    dots[current].classList.add('active');
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
