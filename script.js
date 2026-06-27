// ── Dark Mode Toggle ──
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ── Mobile Nav ──
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  });
});

// ── Scroll Fade-in ──
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
);

document.querySelectorAll(
  '.section, .hero, .finding-card, .impact-card, .blog-card, .value-card, .fun-fact-card'
).forEach((el, i) => {
  el.classList.add('fade-in');
  if (i % 3 === 1) el.classList.add('fade-in-delay-1');
  if (i % 3 === 2) el.classList.add('fade-in-delay-2');
  observer.observe(el);
});

// ── Active Nav Link ──
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// ── Research Data Tabs ──
const dataTabs = document.querySelectorAll('.data-tab');
const dataPanels = document.querySelectorAll('.data-panel');

dataTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    dataTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    dataPanels.forEach(panel => {
      const isTarget = panel.id === `tab-${target}`;
      panel.classList.toggle('active', isTarget);
      panel.hidden = !isTarget;
    });
  });
});

// ── Table Row Selection ──
const table = document.getElementById('experiment-table');
if (table) {
  table.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      table.querySelectorAll('tbody tr').forEach(r => r.classList.remove('row-selected'));
      row.classList.add('row-selected');
    });
  });
}

// ── Data Card Selection ──
document.querySelectorAll('.data-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.data-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

// ── Close Mobile Menu on Resize ──
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
}, { passive: true });
