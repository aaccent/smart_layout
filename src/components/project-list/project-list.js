const pluralRule = new Intl.PluralRules('ru-RU')
const projectSuffixes = new Map([
  [ 'few', 'проекта' ],
  [ 'many', 'проектов' ],
  [ 'one', 'проект' ],
  [ 'other', 'проектов' ],
])

function format(n) {
  const rule = pluralRule.select(n)
  return projectSuffixes.get(rule)
}

void function () {
  const amount = document.querySelector('.project-list .amount')
  const suffix = document.querySelector('.project-list .suffix')
  const title = document.querySelector('.project-list__title')

  if (!title) return

  const projectsAmountNumber = Number(amount.textContent)

  suffix.textContent = ` ${format(projectsAmountNumber)}`

  let observer = new MutationObserver((mutations) => {
    const currentAmount = Number(document.querySelector('.project-list .amount').textContent)
    suffix.textContent = format(currentAmount)
  })

  observer.observe(title, { childList: true, subtree: true })
}()

void function () {
  const filterBtns = document.querySelectorAll('.project-list__filters-button')

  filterBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('_active')) {
        document.querySelector('.project-list__filters').querySelector('._active').classList.remove('_active')
        e.currentTarget.classList.add('_active')
      }
    })
  })
}()





