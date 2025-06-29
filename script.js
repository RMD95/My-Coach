/* Auto-update footer year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Add shadow to navbar after scroll */
const nav = document.querySelector('.sticky-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
