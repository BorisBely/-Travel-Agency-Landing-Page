function initSlider({
  trackSelector,
  leftBtnSelector,
  rightBtnSelector,
  cardWidth,
  gap = 32,
}) {
  const track = document.querySelector(trackSelector);
  const btnLeft = document.querySelector(leftBtnSelector);
  const btnRight = document.querySelector(rightBtnSelector);

  if (!track || !btnLeft || !btnRight) return;

  let offset = 0;
  const step = cardWidth + gap;

  track.innerHTML += track.innerHTML;

  btnRight.addEventListener("click", () => {
    offset -= step;
    track.style.transition = "transform 0.4s ease";
    track.style.transform = `translateX(${offset}px)`;

    if (Math.abs(offset) >= track.scrollWidth / 2) {
      setTimeout(() => {
        track.style.transition = "none";
        offset = 0;
        track.style.transform = `translateX(${offset}px)`;
      }, 400);
    }
  });

  btnLeft.addEventListener("click", () => {
    offset += step;
    track.style.transition = "transform 0.4s ease";
    track.style.transform = `translateX(${offset}px)`;

    if (offset > 0) {
      setTimeout(() => {
        track.style.transition = "none";
        offset = -track.scrollWidth / 2;
        track.style.transform = `translateX(${offset}px)`;
      }, 400);
    }
  });
}

/* === Destin === */
initSlider({
  trackSelector: ".destinations__cards",
  leftBtnSelector: "#slideLeft",
  rightBtnSelector: "#slideRight",
  cardWidth: 400,
});

/* === Special Offers === */
initSlider({
  trackSelector: ".offers__cards",
  leftBtnSelector: ".offers__slider .slider__btn:first-child",
  rightBtnSelector: ".offers__slider .slider__btn:last-child",
  cardWidth: 480,
});
/* === Special Offers === */
initSlider({
  trackSelector: ".planners__cards",
  leftBtnSelector: ".planners__btn--left",
  rightBtnSelector: ".planners__btn--right",
  cardWidth: 300,
});
initSlider({
  trackSelector: ".gallery__cards",
  leftBtnSelector: ".galleryLeft",
  rightBtnSelector: ".galleryRight",
  cardWidth: 300,
});
