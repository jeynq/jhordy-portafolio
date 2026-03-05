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

// ===== Conteo por canal (WhatsApp / Instagram / LinkedIn) =====
(function trackTrafficSource(){
  const params = new URLSearchParams(window.location.search);
  const src = (params.get("utm_source") || "").toLowerCase();

  if (!src) return; // si no hay UTM, no registra canal

  const allowed = new Set(["whatsapp","instagram","linkedin","github","facebook","tiktok"]);
  const channel = allowed.has(src) ? src : "otro";

  // Espera a que goatcounter cargue y luego registra el evento
  function send(){
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
      window.goatcounter.count({
        path: `/source/${channel}`,
        title: `source:${channel}`,
        event: true
      });
    } else {
      setTimeout(send, 300);
    }
  }
  send();
})();