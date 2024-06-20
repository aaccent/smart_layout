import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'


function loop() {
  const slides = Array.from(document.querySelectorAll('.our-clients__item'))
  const swiperWrapper = document.querySelector('.our-clients .swiper-wrapper')

  const swiperWrapperWidth = swiperWrapper.offsetWidth
  let slidesWidth = slides.reduce((sum, cur) => sum + cur.offsetWidth, 0)

  if (swiperWrapperWidth < slidesWidth) return

  while (swiperWrapperWidth >= slidesWidth) {
    slides.forEach(el => {
      swiperWrapper.append(el.cloneNode(true))
      slidesWidth += el.offsetWidth
    })
  }
}

new Swiper('.our-clients .swiper', {
    modules: [ Navigation, Autoplay ],
    navigation: {
      nextEl: '.arrow-btn--next',
      prevEl: '.arrow-btn--prev',
    },
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    loopAddBlankSlides: false,
    spaceBetween: 5,
    speed: 3000,
    breakpoints: {
      1000: {
        spaceBetween: 8,
      },
    },
    on: {
      beforeInit: loop,
    },
  },
)
