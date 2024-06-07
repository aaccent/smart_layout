import Swiper from 'swiper'

new Swiper('.software .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
      1000: {
        enabled: false
      },
    },
  },
)