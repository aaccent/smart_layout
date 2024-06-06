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

  let observer = new MutationObserver((mutations) => {
    const currentAmount = Number(document.querySelector('.project-list .amount').textContent)
    suffix.textContent = format(currentAmount)
  })

  observer.observe(title, { childList: true, subtree: true })
}()


void function () {
  const selectButton = document.querySelector('.articles__select-button')
  const selected = selectButton.querySelector('span')
  const select = selectButton.closest('.articles__select')
  const options = select.querySelectorAll('.articles__select-item')

  if (!selectButton) return


  selectButton.addEventListener('click', (e) => {
    select.classList.toggle('_opened')
  })

  options.forEach(el => {
    el.addEventListener('click', (e) => {
      select.querySelector('._selected').classList.remove('_selected')
      el.classList.add('_selected')

      selected.textContent = ` ${el.textContent}`
      select.classList.remove('_opened')
    })
  })
} ()

