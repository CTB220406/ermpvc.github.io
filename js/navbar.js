let lastScrollTop = 0;
const navbar = document.getElementById("MaiNavbarPage");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo → ocultar navbar
    navbar.classList.add("navbar-hidden-all");
  } else {
    // Scroll hacia arriba → mostrar navbar
    navbar.classList.remove("navbar-hidden-all");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar valores negativos
});

window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const main = document.querySelector("body");

    if (navbar && main) {
        const navbarHeight = navbar.offsetHeight;
        main.style.paddingTop = `${navbarHeight}px`;
    }
});