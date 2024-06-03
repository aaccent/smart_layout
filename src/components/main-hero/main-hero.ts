import Swiper from 'swiper'
import {Navigation, EffectFade, Pagination} from 'swiper/modules'

new Swiper('.main-hero .swiper', {
        modules: [Navigation, EffectFade, Pagination],
        navigation: {
            nextEl: '.arrow-btn--next',
            prevEl: '.arrow-btn--prev',
        },

        loop: true,
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.swiper-pagination'
        }
    },
)