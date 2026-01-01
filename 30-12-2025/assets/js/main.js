document.addEventListener('DOMContentLoaded', () => {
  // AOS init
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }

  // Navbar shadow on scroll
  const nav = document.querySelector('.glass-nav');
  const toggleNav = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 10);
  };
  toggleNav();
  window.addEventListener('scroll', toggleNav);

  // Homepage filters
  const filterButtons = document.querySelectorAll('.btn-filter');
  const cards = document.querySelectorAll('.homepage-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cards.forEach(card => {
        const cat = card.dataset.category;
        card.classList.toggle('d-none', filter !== 'all' && cat !== filter);
      });
    });
  });

  // Optional GSAP hero fade (if gsap loaded)
  if (window.gsap) {
    gsap.from('.hero-section .eyebrow', { opacity:0, y:20, duration:0.6, delay:0.1 });
    gsap.from('.hero-section h1', { opacity:0, y:20, duration:0.6, delay:0.2 });
    gsap.from('.hero-section h2', { opacity:0, y:20, duration:0.6, delay:0.3 });
    gsap.from('.hero-section p', { opacity:0, y:20, duration:0.6, delay:0.4 });
    gsap.from('.hero-section .btn', { opacity:0, y:20, duration:0.6, delay:0.5, stagger:0.08 });
  }
});
