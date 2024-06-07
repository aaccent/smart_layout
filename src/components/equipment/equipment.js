import Swiper from 'swiper'

new Swiper('.equipment .swiper', {
    slidesPerView: 'auto',

    breakpoints: {
      1000: {
        enabled: false
      },
    },
  },
)