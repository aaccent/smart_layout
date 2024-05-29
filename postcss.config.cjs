const autoScales = require('./postcss/auto-scales.cjs')

module.exports = {
  plugins: [
    autoScales({
      dodgeSelectors: [
        { type: 'startsWith', value: '.swiper' },
        { type: 'startsWith', value: '.carousel' },
        { type: 'includes', value: 'fancybox' },
        { type: 'includes', value: 'aos' },
      ],
      limitMediaWidth: false,
      initWidth: [
        { width: 1680 },
        { width: 380, mediaQuery: 'only screen and (max-width: 600px)' },
        { width: 700, mediaQuery: 'only screen and (max-width: 1000px)' },
      ],
    }),
  ],
}