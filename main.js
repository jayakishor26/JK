/* ===============================
   SCROLL REVEAL (ALL TYPES)
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load
});

/* ===============================
   SKILLS PROGRESS ANIMATION
================================ */
const skills = document.querySelectorAll(".progress");
let skillsAnimated = false;

function animateSkills() {
  const skillsSection = document.getElementById("skills");
  if (!skillsSection) return;

  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100 && !skillsAnimated) {
    skills.forEach(skill => {
      if (skill.classList.contains("html")) skill.style.width = "95%";
      if (skill.classList.contains("css"))  skill.style.width = "85%";
      if (skill.classList.contains("js"))   skill.style.width = "90%";
      if (skill.classList.contains("py"))   skill.style.width = "80%";
    });

    skillsAnimated = true;
  }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);


/* ===============================
   GALLERY LIGHTBOX
================================ */
function openLightbox(card) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const text = document.getElementById("lightbox-text");

  const imgEl = card.querySelector("img");
  const titleEl = card.querySelector(".gallery-desc h4");
  const textEl = card.querySelector(".gallery-desc p");

  img.src = imgEl.src;
  title.innerText = titleEl ? titleEl.innerText : "";
  text.innerText = textEl ? textEl.innerText : "";

  lightbox.classList.add("show");
}


/* Close lightbox on background click */
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("show");
}


/* Close lightbox on ESC key */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

/* ===============================
   DARK / LIGHT THEME TOGGLE
================================ */

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
/* ===============================
   SKILL BAR SCROLL ANIMATION
================================ */
const bars = document.querySelectorAll(".progress");

function animateBars() {
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateBars);
window.addEventListener("load", animateBars);
/* ===============================
   ACTIVE NAV LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 120) {
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

/* ===============================
   SKILLS BAR WIDTH ANIMATION
================================ */
const skillBars = document.querySelectorAll(".progress");

function animateSkills() {
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      bar.style.width = bar.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

/* ===============================
   STAGGER REVEAL ON SCROLL
================================ */

const staggerItems = document.querySelectorAll(".stagger-item");

function staggerReveal() {
  staggerItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < window.innerHeight - 100) {
      setTimeout(() => {
        item.classList.add("active");
      }, index * 150); // 👈 stagger delay
    }
  });
}

window.addEventListener("scroll", staggerReveal);
window.addEventListener("load", staggerReveal);

// Close lightbox on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// Close lightbox when clicking outside content
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});

/* ===============================
   TIMELINE REVEAL ON SCROLL
================================ */

const timelineItems = document.querySelectorAll(
  ".timeline-left, .timeline-right"
);

function revealTimeline() {
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealTimeline);
window.addEventListener("load", revealTimeline);

/* ===============================
   FOOTER YEAR AUTO UPDATE
================================ */
document.getElementById("year").textContent =
  new Date().getFullYear();
