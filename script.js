// Intro (wok + ogien) — znika po starcie, pokazuje sie raz na sesje
const intro = document.getElementById('intro');
if (intro && getComputedStyle(intro).display !== 'none') {
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    intro.classList.add('hide');
    setTimeout(() => intro.remove(), 800);
  };
  window.addEventListener('load', () => setTimeout(finish, 2100));
  setTimeout(finish, 3800); // fallback gdyby load juz przeszedl
}

// Mobile nav
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
