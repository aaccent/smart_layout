const pluralRule = new Intl.PluralRules('ru-RU')
const articlesSuffixes = new Map([
  [ 'few', 'статьи' ],
  [ 'many', 'статей' ],
  [ 'one', 'статья' ],
  [ 'other', 'статьи' ],
])

function format(n) {
  const rule = pluralRule.select(n)
  return articlesSuffixes.get(rule)
}

void function () {
  const amount = document.querySelector('.articles .amount')
  const suffix = document.querySelector('.articles .suffix')
  const title = document.querySelector('.articles__title')

  if (!title) return

  const articlesAmountNumber = Number(amount.textContent)

  suffix.textContent = ` ${format(articlesAmountNumber)}`

  let observer = new MutationObserver(() => {
    const currentAmount = Number(document.querySelector('.project-list .amount').textContent)
    suffix.textContent = format(currentAmount)
  })

  observer.observe(title, { childList: true, subtree: true })
}()


void function () {
  const selectButton = document.querySelector('.articles__select-button')

  if (!selectButton) return

  const selected = selectButton.querySelector('span')
  const select = selectButton.closest('.articles__select')
  const options = select.querySelectorAll('.articles__select-item')
  const inputHidden = selectButton.closest('.articles__select').querySelector('input[type="hidden"]')

  window.addEventListener('scroll', () => {
    select.classList.remove('_opened')
  })


  selectButton.addEventListener('click', () => {
    select.classList.toggle('_opened')
  })

  options.forEach(el => {
    el.addEventListener('click', () => {
      select.querySelector('._selected').classList.remove('_selected')
      el.classList.add('_selected')

      inputHidden.value = el.dataset.value
      selected.textContent = ` ${el.textContent}`
      select.classList.remove('_opened')
    })
  })
} ()

