(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // mobile menu
  const btn = document.querySelector(".nav__menu");
  const drawer = document.getElementById("drawer");
  if (btn && drawer) {
    btn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
    drawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        drawer.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // testimonial slider (same “one-at-a-time” feel)
  const q = document.getElementById("quotes");
  const navBtns = document.querySelectorAll("[data-q]");
  if (q && navBtns.length) {
    let idx = 0;
    const total = q.children.length;

    const go = (dir) => {
      idx = (idx + dir + total) % total;
      q.style.transform = `translateX(${-idx * 100}%)`;
      q.style.transition = "transform 260ms ease";
    };

    navBtns.forEach(b => b.addEventListener("click", () => go(Number(b.dataset.q))));
  }

  window.mailtoQuick = (label) => {
    const to = "info@yourdomain.com"; // CHANGE
    const subject = encodeURIComponent(`${label} — Consulting enquiry`);
    const body = encodeURIComponent("Hi,\n\nHere’s what’s happening:\n\n- \n\nThanks,\n");
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    return false;
  };
})();