// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll("header nav a").forEach(link => {
  link.addEventListener("click", e => {
    // only scroll to sections inside this page
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // offset for header
          behavior: "smooth"
        });
      }
    }
  });
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


// ===== Active Nav Highlight on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Optional: Expand/Collapse All Projects =====
const viewAllBtn = document.querySelector('a[href="#all-projects"] button');
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", e => {
    const allProjects = document.getElementById("all-projects");
    if (allProjects) {
      allProjects.scrollIntoView({ behavior: "smooth" });
    }
  });
}
