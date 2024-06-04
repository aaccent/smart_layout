import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

new Swiper('.projects .swiper', {
    modules: [ Navigation ],
    navigation: {
      nextEl: '.arrow-btn--next',
      prevEl: '.arrow-btn--prev',
    },

    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 10,

    breakpoints: {
      1000: {
        slidesPerView: 2,
        spaceBetween: 17,
      },
    },
  },
)