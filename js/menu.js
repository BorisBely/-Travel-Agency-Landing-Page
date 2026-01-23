const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

/* === Special Offers === */
burger.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
});
