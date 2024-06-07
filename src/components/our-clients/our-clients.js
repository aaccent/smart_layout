import Swiper from 'swiper'
import { Navigation, Autoplay} from 'swiper/modules'

new Swiper('.our-clients .swiper', {
    modules: [ Navigation, Autoplay ],
    navigation: {
      nextEl: '.arrow-btn--next',
      prevEl: '.arrow-btn--prev',
    },

    autoplay: {
      delay: 0,
    },
    slidesPerView: 'auto',
    spaceBetween: 5,
    speed: 3000,
    breakpoints: {
      1000: {
        spaceBetween: 8,
      },
    },
  },
)