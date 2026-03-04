const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const btn = document.getElementById("btnEnviar");
btn?.addEventListener("click", () => {
  alert("Mensaje enviado");
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger?.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }

    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => {
  io.observe(el);
});