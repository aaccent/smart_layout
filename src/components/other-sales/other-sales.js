import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

if (document.querySelector('.other-sales')) {
  new Swiper('.other-sales .swiper', {
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
          spaceBetween: 16,
          slidesPerView: 2,
        },
      },
    },
  )
}