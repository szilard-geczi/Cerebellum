(() => {
  // =========================
  // YEAR
  // =========================
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // =========================
  // MOBILE DRAWER
  // =========================
  const menuBtn = document.getElementById("menuBtn");
  const drawer = document.getElementById("drawer");

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    drawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        drawer.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // =========================
  // PAGES DROPDOWN (DESKTOP)
  // =========================
  const pagesBtn = document.getElementById("pagesBtn");
  const pagesMenu = document.getElementById("pagesMenu");

  if (pagesBtn && pagesMenu) {
    pagesBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const hidden = pagesMenu.hasAttribute("hidden");
      if (hidden) pagesMenu.removeAttribute("hidden");
      else pagesMenu.setAttribute("hidden", "");
      pagesBtn.setAttribute("aria-expanded", String(hidden));
    });

    document.addEventListener("click", (e) => {
      if (!pagesMenu.contains(e.target) && !pagesBtn.contains(e.target)) {
        pagesMenu.setAttribute("hidden", "");
        pagesBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // =========================
  // HERO IMAGE EMPTY STATE
  // =========================
  const frame = document.getElementById("heroFrame");
  const img = frame ? frame.querySelector("img") : null;

  if (frame && img) {
    img.addEventListener("error", () => frame.classList.add("is-empty"));
    if (!img.getAttribute("src")) frame.classList.add("is-empty");
  }

  // =========================
  // MAILTO BUTTONS
  // =========================
  const mailBtns = document.querySelectorAll("[data-mailto]");
  const to = "info@yourdomain.com"; // CHANGE THIS

  mailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const label = btn.getAttribute("data-mailto") || "Enquiry";
      const subject = encodeURIComponent(`${label} — Consulting enquiry`);
      const body = encodeURIComponent("Hi,\n\nHere’s what’s happening:\n\n- \n\nThanks,\n");
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  });
})();
