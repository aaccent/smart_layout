import Swiper from 'swiper'

new Swiper('.equipment .swiper', {
    loop: true,
    slidesPerView: 'auto',

    breakpoints: {
      1000: {
        enabled: false
      },
    },
  },
)