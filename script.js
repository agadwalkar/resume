/* ═══════════════════════════════════════════════════════════════
   ASHMITA GADWALKAR — Resume Site JS
   Vanilla JS only — no dependencies
═══════════════════════════════════════════════════════════════ */

'use strict';

// ─── CARD RENDERER ───────────────────────────────────────────
// Runs first so .reveal elements exist before IntersectionObserver is set up
(function renderCards() {
  function buildCard(card) {
    const bullets = card.bullets
      .map(b => `<li>${b}</li>`)
      .join('\n            ');

    const tags = card.tags
      .map(t => `<span class="tag ${t.type}">${t.label}</span>`)
      .join('\n            ');

    return `
      <div class="project-card reveal">
        <div class="project-header">
          <h3 class="project-name">${card.title}</h3>
          <span class="project-role">${card.role}</span>
        </div>
        <ul class="card-bullets">
            ${bullets}
        </ul>
        <div class="card-tags">
            ${tags}
        </div>
      </div>`;
  }

  const expGrid = document.getElementById('experience-grid');
  if (expGrid && window.EXPERIENCE) {
    expGrid.innerHTML = window.EXPERIENCE.map(buildCard).join('');
  }

  const intGrid = document.getElementById('internships-grid');
  if (intGrid && window.INTERNSHIPS) {
    intGrid.innerHTML = window.INTERNSHIPS.map(buildCard).join('');
  }
})();

// ─── NAV: Scroll state + active section highlight ─────────────
(function initNav() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-menu-list a');
  const menuLabel = document.querySelector('.nav-menu-label');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    // Frosted-glass effect once past hero
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link based on viewport
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - var_navH() - 20;
      if (window.scrollY >= top) current = section.id;
    });

    let activeText = 'Menu';
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === '#' + current;
      link.classList.toggle('active', isActive);
      if (isActive) activeText = link.textContent.trim();
    });
    if (menuLabel) menuLabel.textContent = activeText;
  }

  function var_navH() {
    return parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h')) || 64;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

// ─── MOBILE NAV MENU ─────────────────────────────────────────
(function initNavMenu() {
  const menu = document.querySelector('.nav-menu');
  const button = document.querySelector('.nav-menu-toggle');
  const list = document.querySelector('.nav-menu-list');
  const links = document.querySelectorAll('.nav-menu-list a');
  if (!menu || !button) return;

  function setOpen(isOpen) {
    menu.classList.toggle('open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    if (list) list.setAttribute('aria-hidden', String(!isOpen));
  }

  button.addEventListener('click', () => {
    setOpen(!menu.classList.contains('open'));
  });

  links.forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
})();

// ─── REVEAL: Intersection Observer for scroll animations ──────
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings within the same parent
          const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
          let delay = 0;
          siblings.forEach(sib => {
            if (sib === entry.target) {
              setTimeout(() => sib.classList.add('visible'), delay);
              delay += 80;
            }
          });
          if (!entry.target.classList.contains('visible')) {
            entry.target.classList.add('visible');
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();

// ─── SMOOTH SCROLL for anchor links ──────────────────────────
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('navbar').offsetHeight;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

// ─── NAV DOWNLOAD BUTTON: show after hero CTA scrolls away ───
(function initNavDownload() {
  const heroBtn  = document.querySelector('.hero-cta .btn-ghost');
  const navBtn   = document.getElementById('nav-download');
  if (!heroBtn || !navBtn) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      navBtn.classList.toggle('visible', !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(heroBtn);
})();

// ─── HERO: staggered entrance on load ────────────────────────
(function initHeroEntrance() {
  const children = document.querySelectorAll('.hero-content > *');
  children.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${0.1 + i * 0.08}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
})();
