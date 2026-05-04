// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll("section, .card, .edu-item, .timeline-item, .about-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
function openPhoto(src, caption) {
  document.getElementById("photo-modal-img").src = src;
  document.getElementById("photo-modal-caption").textContent = caption;
  document.getElementById("photo-modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePhoto() {
  document.getElementById("photo-modal").classList.remove("active");
  document.getElementById("photo-modal-img").src = "";
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // close game modal
    document.getElementById("game-modal").classList.remove("active");
    document.getElementById("game-frame").src = "";
    // close photo modal
    document.getElementById("photo-modal").classList.remove("active");
    document.getElementById("photo-modal-img").src = "";
    document.body.style.overflow = "";
  }
});
const cards = document.querySelectorAll(".about-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    // move glow
    const glow = card.querySelector("::before");
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});