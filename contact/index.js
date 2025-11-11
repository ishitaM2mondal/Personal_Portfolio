window.addEventListener('load', () => {
    const contact = document.querySelector('.contact');
    contact.classList.add('visible');
});
// ===== Hamburger Menu Toggle =====
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});