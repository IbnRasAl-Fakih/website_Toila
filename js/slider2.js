var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});