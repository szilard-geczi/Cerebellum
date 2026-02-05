(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

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

  window.mailtoFree = (event, resourceName) => {
    event.preventDefault();
    const email = event.target.elements["email"].value.trim();
    const to = "you@yourdomain.com"; // change this
    const subject = encodeURIComponent(`Free resource request — ${resourceName}`);
    const body = encodeURIComponent(`Hi,\n\nPlease send: ${resourceName}\nEmail: ${email}\n\nThanks!`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    return false;
  };
})();