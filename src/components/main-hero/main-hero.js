import Swiper from 'swiper'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper/modules'

void function () {
  const progressButton = document.querySelector('.main-hero .arrow-btn--next');

  if(!progressButton) return

  const progressBg = document.createElement('div');
  progressBg.classList.add('_progress-bg')
  progressButton.append(progressBg)

  new Swiper('.main-hero .swiper', {
      modules: [ Navigation, EffectFade, Pagination, Autoplay ],
      loop: true,
      slidesPerView: 1,
      effect: 'fade',

      navigation: {
        nextEl: '.arrow-btn--next',
        prevEl: '.arrow-btn--prev',
      },
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction:
          false,
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressBg.style.setProperty("--progress", 1 - progress);
        }
      },
      breakpoints: {
        1000: {
          pagination: {
            enabled: false,
          },
        },
      },
    },
  )
}()

