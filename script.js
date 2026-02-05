(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.querySelector(".menu");
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

  // Simple testimonial slider (1 full-width card at a time)
  const slides = document.getElementById("slides");
  const buttons = document.querySelectorAll(".slider__btn");
  if (slides && buttons.length) {
    let index = 0;
    const total = slides.children.length;

    const go = (dir) => {
      index = (index + dir + total) % total;
      slides.style.transform = `translateX(${-index * 100}%)`;
      slides.style.transition = "transform 260ms ease";
    };

    buttons.forEach(b => b.addEventListener("click", () => go(Number(b.dataset.dir))));
  }

  window.mailtoForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const msg = form.elements["message"].value.trim();

    const to = "you@yourdomain.com"; // change this
    const subject = encodeURIComponent(`Consulting enquiry — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}\n`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    return false;
  };
})();