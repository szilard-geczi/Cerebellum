(() => {
  // year
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

  // testimonial rail
  const trail = document.getElementById("trail");
  const tBtns = document.querySelectorAll("[data-t]");
  if (trail && tBtns.length) {
    let idx = 0;
    const total = trail.children.length;

    const go = (dir) => {
      idx = (idx + dir + total) % total;
      trail.style.transform = `translateX(${-idx * 100}%)`;
      trail.style.transition = "transform 260ms ease";
    };

    tBtns.forEach(b => b.addEventListener("click", () => go(Number(b.dataset.t))));
  }

  // scroll reveal
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-in");
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));

  // subtle “magnetic” button hover (very light)
  document.querySelectorAll(".btn--mag").forEach((btn) => {
    const strength = 8;
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width/2)) / (r.width/2);
      const dy = (e.clientY - (r.top + r.height/2)) / (r.height/2);
      btn.style.transform = `translate(${dx*strength}px, ${dy*strength}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

  // CTA mailto
  window.mailtoQuick = (label) => {
    const to = "info@yourdomain.com"; // CHANGE
    const subject = encodeURIComponent(`${label} — Consulting enquiry`);
    const body = encodeURIComponent("Hi,\n\nHere’s what’s happening:\n\n- \n\nThanks,\n");
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    return false;
  };
})();