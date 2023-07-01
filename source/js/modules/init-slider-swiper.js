const initSlider = () => {
  // eslint-disable-next-line no-new, no-unused-vars, no-undef
  let swiper = new Swiper('.slider__week', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 1e3,
    initialSlide: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      768: {
        spaceBetween: 10,
      },
    },
  });
};

export {initSlider};
