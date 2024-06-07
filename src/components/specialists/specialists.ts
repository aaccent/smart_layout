import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

new Swiper('.specialists .swiper', {
    modules: [ Navigation ],
    navigation: {
      nextEl: '.arrow-btn--next',
      prevEl: '.arrow-btn--prev',
    },

    slidesPerView: 1.1,
    spaceBetween: 10,
    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  },
)