const swiperHero = new Swiper('.swiper-hero', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.15,

  navigation: {
    nextEl: '#menu__right-arrow',
    prevEl: '#menu__left-arrow',
  },
  breakpoints: {
    1440: {
      slidesPerView: 2.15,
         spaceBetween: 40,

    },
}
});
var direction = window.innerWidth <= 768 ? 'horizontal' : 'vertical';
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      direction: direction,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: "#slider__right-arrow",
        prevEl: "#slider__left-arrow",
      },
      thumbs: {
        swiper: swiper,
      },
    });