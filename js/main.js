/* ============================================================
   MAIN — site behavior (theme toggle, nav, scroll reveal)
   ============================================================ */

(function themeInit() {
  const saved = null; // in-memory only, no localStorage per portability
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  btn.setAttribute("aria-pressed", String(prefersDark));

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    btn.setAttribute("aria-pressed", String(next === "dark"));
  });
})();

(function navInit() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

(function scrollRevealInit() {
  // Runs after render.js has populated content (DOMContentLoaded fires first,
  // then this listens on 'load' so every section actually exists in the DOM
  // before we decide what to observe).
  window.addEventListener("load", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("section .section-head, section > .container > *:not(.section-head)").forEach(node => {
      if (!node.hasAttribute("data-reveal")) node.setAttribute("data-reveal", "");
    });

    const targets = document.querySelectorAll("[data-reveal]");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(t => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(t => observer.observe(t));
  });
})();

(function yearInit() {
  const y = document.getElementById("current-year");
  if (y) y.textContent = new Date().getFullYear();
})();
