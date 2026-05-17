// ============================
// GSAP + Lenis Init
// ============================
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  lerp: 0.1,
});

// Lenis 1.1.14 は window.scrollY をネイティブ更新するため scrollerProxy 不要
lenis.on('scroll', () => ScrollTrigger.update());

gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// 全トリガー位置を初期計算
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
// Helper: スクロールリビール登録
// gsap.set の初期トゥイーンとの競合を防ぐため overwrite: true を使用
// ============================
function revealOn(trigger, start, animProps, targets) {
  var els = typeof targets === 'string' ? gsap.utils.toArray(targets) : targets;
  if (!els || els.length === 0) return;
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
    .to('.hero-line',       { scaleX: 1, duration: 1.2, ease: 'expo.out' }, '-=0.6');

  return tl;
}

// ページロード → ヒーロー
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
revealOn('#about', 'top 80%', { y: 16, duration: 0.8 }, '.about-label');
revealOn('#about', 'top 74%', { y: 14, duration: 0.8 }, '.about-meta-row');
revealOn('#about', 'top 68%', { y: 12, duration: 0.7 }, '.about-divider');
revealOn('#about', 'top 62%', { y: 10, duration: 0.7, stagger: 0.13 }, '.about-text-line');
revealOn('#about', 'top 55%', { y: 8,  duration: 0.7 }, '.about-text--sub');

// ============================
// Works Cards (交互スライドイン)
// ============================
const workCards = document.querySelectorAll('.work-card');

workCards.forEach((card, i) => {
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

// ============================
// Hero Parallax (desktop only)
// ============================
if (!window.matchMedia('(max-width: 860px)').matches) {
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
      // CSS hover 用に inline style を最後にクリア
      onComplete: () => gsap.set(noteCards, { clearProps: 'opacity,y' }),
    }),
  });
})();

// ============================
// Active Nav Link
// ============================
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + entry.target.id) {
          a.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => activeObserver.observe(s));

// ============================
// Manual Slideshow
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
});
