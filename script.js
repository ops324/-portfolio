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

// ============================
// Manual slideshow
// ============================
document.querySelectorAll('.work-thumb[data-slide]').forEach(thumb => {
  const imgs = thumb.querySelectorAll('.work-thumb-img');
  const dots = thumb.querySelectorAll('.slide-dot');
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

  prevBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    goTo(current - 1);
  });

  nextBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    goTo(current + 1);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      goTo(i);
    });
  });
});
