const rateNumbers = document.querySelectorAll('.rating__count-number')

rateNumbers.forEach(rate => {
  rate.textContent = rate.dataset.rating
  const stars = rate.closest('.rating__count').querySelector('.rating__count-stars')
  const rateCount = Math.round(Number(rate.dataset.rating))

  for (let i = 0; i < rateCount; i++) {
    const star = document.createElement('img')
    star.src = 'assets/icons/star.svg'
    stars.append(star)
  }
})