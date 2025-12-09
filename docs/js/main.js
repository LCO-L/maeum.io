// ===== MAEUM.IO Main JavaScript =====

// Language Toggle
function initLanguageToggle() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const koElements = document.querySelectorAll('[data-lang="ko"]');
  const enElements = document.querySelectorAll('[data-lang="en"]');

  // Check saved preference or browser language
  const savedLang = localStorage.getItem('maeum-lang');
  const browserLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
  const currentLang = savedLang || browserLang;

  setLanguage(currentLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langBtn;
      setLanguage(lang);
      localStorage.setItem('maeum-lang', lang);
    });
  });

  function setLanguage(lang) {
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });

    koElements.forEach(el => {
      el.style.display = lang === 'ko' ? '' : 'none';
    });

    enElements.forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
  }
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .use-case-item, .scenario-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// Navbar Scroll Effect
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 10, 15, 0.8)';
    }
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initScrollAnimations();
  initNavScroll();
  initSmoothScroll();
});
