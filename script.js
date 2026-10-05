/* FORJA Club de Entrenamiento: sitio ficticio de demostración (BabyRock).
   Interacciones de navegación, animaciones de entrada y formulario simulado.
   No se envía ningún dato a ningún servidor. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");

  /* Menú móvil */
  if (header && toggle && nav) {
    var toggleLabel = toggle.querySelector(".nav-toggle-label");
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (toggleLabel) {
        toggleLabel.textContent = open ? "Cerrar" : "Menú";
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") && header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        if (toggleLabel) {
          toggleLabel.textContent = "Menú";
        }
      }
    });
  }

  /* Sombra del encabezado al hacer scroll */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Aparición progresiva de bloques */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* Enlace activo en la navegación */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".site-nav a[href^='#']")
  );
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          navLinks.forEach(function (link) {
            var current = link.getAttribute("href") === "#" + entry.target.id;
            if (current) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* Formulario de contacto simulado */
  var form = document.getElementById("forma-contacto");
  var success = document.getElementById("form-success");

  if (form && success) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var name = (document.getElementById("nombre") || {}).value || "";
      success.textContent =
        "¡Gracias" +
        (name ? ", " + name.trim().split(" ")[0] : "") +
        "! Hemos recibido tu solicitud. Te responderíamos en menos de 24 horas.";
      success.hidden = false;
      form.reset();
      window.clearTimeout(success._timer);
      success._timer = window.setTimeout(function () {
        success.hidden = true;
      }, 9000);
    });
  }

  /* Año del pie de página */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
