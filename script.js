// ============================
// Nagi スライダー（手動スライド）
// ============================
(function () {
  const thumb = document.querySelector('.work-thumb-nagi');
  if (!thumb) return;

  const slides = thumb.querySelectorAll('.nagi-slide');
  const dots   = thumb.querySelectorAll('.nagi-dot');
  let current  = 0;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  // ドットクリック（カードリンクへの伝播を止める）
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(Number(dot.dataset.index));
    });
  });

  // タッチスワイプ（モバイル対応）
  let touchStartX = 0;

  thumb.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  thumb.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      e.preventDefault();
      e.stopPropagation();
      goTo(diff > 0 ? current + 1 : current - 1);
    }
  });
})();

// ============================
// Scroll reveal
// ============================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.06}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================
// Active nav link on scroll
// ============================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
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
