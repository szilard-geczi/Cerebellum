(() => {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Mobile drawer
  const burger = document.getElementById("burger");
  const drawer = document.getElementById("drawer");

  if (burger && drawer) {
    burger.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });

    drawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        drawer.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Mailto buttons
  const to = "info@yourdomain.com"; // CHANGE THIS
  document.querySelectorAll("[data-mailto]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const label = el.getAttribute("data-mailto") || "Enquiry";
      const subject = encodeURIComponent(`${label} — Hospitality consulting`);
      const body = encodeURIComponent("Hi,\n\nHere’s what’s happening:\n\n- \n\nBest,\n");
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  });
})();