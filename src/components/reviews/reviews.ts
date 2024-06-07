import Swiper from 'swiper'
import { Navigation, EffectFade } from 'swiper/modules'

new Swiper('.reviews .swiper', {
    modules: [ Navigation, EffectFade ],
    navigation: {
      nextEl: '.arrow-btn--next',
      prevEl: '.arrow-btn--prev',
    },
    slidesPerView: 1.1,
    spaceBetween: 10,

    breakpoints: {
      1000: {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
      },
    },
  },
)