import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

new Swiper('.certificates .swiper', {
    modules: [ Navigation ],
    navigation: {
      nextEl: '.arrow-btn--next',
      prevEl: '.arrow-btn--prev',
    },

    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  },
)