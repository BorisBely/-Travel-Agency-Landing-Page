const cards = document.querySelector(".destinations__cards");
const btnLeft = document.getElementById("slideLeft");
const btnRight = document.getElementById("slideRight");

const cardWidth = 300 + 32;
let offset = 0;

cards.innerHTML += cards.innerHTML;

btnRight.addEventListener("click", () => {
  offset -= cardWidth;
  cards.style.transition = "transform 0.4s ease";
  cards.style.transform = `translateX(${offset}px)`;

  if (Math.abs(offset) >= cards.scrollWidth / 2) {
    setTimeout(() => {
      cards.style.transition = "none";
      offset = 0;
      cards.style.transform = `translateX(${offset}px)`;
    }, 400);
  }
});

btnLeft.addEventListener("click", () => {
  offset += cardWidth;
  cards.style.transition = "transform 0.4s ease";
  cards.style.transform = `translateX(${offset}px)`;

  if (offset > 0) {
    setTimeout(() => {
      cards.style.transition = "none";
      offset = -cards.scrollWidth / 2;
      cards.style.transform = `translateX(${offset}px)`;
    }, 400);
  }
});
