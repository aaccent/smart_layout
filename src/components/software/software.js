import Swiper from 'swiper'

new Swiper('.software .swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
      1000: {
        enabled: false
      },
    },
  },
)