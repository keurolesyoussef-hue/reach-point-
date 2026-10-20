/* ═══════════════════════════════════════════════════
   REACHPOINT — Main JavaScript
═══════════════════════════════════════════════════ */

/* ── Nav scroll effect ───────────────────────────── */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

/* ── Mobile nav toggle ───────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMobile?.classList.toggle('open');
  document.body.style.overflow = navMobile?.classList.contains('open') ? 'hidden' : '';
});
navMobile?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navMobile?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Active nav link ─────────────────────────────── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ── Scroll reveal ───────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Counter animation ───────────────────────────── */
function animateCount(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ── Smooth cursor glow (desktop only) ────────────── */
if (window.innerWidth > 768) {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.style.cssText = `
    position:fixed;width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle,rgba(181,36,32,0.06) 0%,transparent 70%);
    pointer-events:none;z-index:0;transform:translate(-50%,-50%);
    transition:transform 0.1s ease;top:0;left:0;
  `;
  document.body.appendChild(glow);
  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

/* ── Nav scrolled style inject ───────────────────── */
const style = document.createElement('style');
style.textContent = `.nav.scrolled { box-shadow: 0 4px 40px rgba(0,0,0,0.5); }`;
document.head.appendChild(style);
