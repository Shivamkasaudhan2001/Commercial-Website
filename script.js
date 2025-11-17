// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

if (navToggle && navbar) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("nav-toggle--open");
    navbar.classList.toggle("nav--open");
  });

  // Close nav on link click (mobile)
  navbar.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("nav-toggle--open");
      navbar.classList.remove("nav--open");
    });
  });
}

// Gallery slider (simple horizontal scroll)
const galleryTrack = document.getElementById("galleryTrack");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

if (galleryTrack && galleryPrev && galleryNext) {
  const scrollAmount = 280; // px

  galleryPrev.addEventListener("click", () => {
    galleryTrack.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  galleryNext.addEventListener("click", () => {
    galleryTrack.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
}

// Scroll-in animations
const animatedElements = document.querySelectorAll(".animate-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

animatedElements.forEach((el) => observer.observe(el));

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
