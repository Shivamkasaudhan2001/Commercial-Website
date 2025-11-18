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

// ========== Dynamic hero background (wallpaper templates) ==========
const heroSection = document.querySelector(".hero");

// Only run if hero exists on this page
if (heroSection) {
  // List of background images (use your own files / URLs)
  const heroBackgrounds = [
    "bg1/bg1.jpg",
    "bg2/bg2.jpg",
    "bg3/bg3.jpg",
    "bg4/bg4.jpg",
    // You can add more: "images/bg4.jpg",
  ];

  // Set initial background
  let currentBgIndex = 0;
  heroSection.style.backgroundImage = `url("${heroBackgrounds[currentBgIndex]}")`;

  // Change background every 10 seconds (10000 ms)
  const changeIntervalMs = 10000;

  setInterval(() => {
    currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
    heroSection.style.backgroundImage = `url("${heroBackgrounds[currentBgIndex]}")`;
  }, changeIntervalMs);
}
