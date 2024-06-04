const pluralRule = new Intl.PluralRules('ru-RU')
const suffixes = new Map([
  ["one", " проект"],
  ["two", " проекта"],
  ["few", " проекта"],
])

function format(n) {
  const rule = pluralRule.select(n);
  const suffix = suffixes.get(rule);

  if (suffix) {
    return `${n}${suffix}`;
  } else return `${n} проектов`
}

void function () {
  const projectItem = document.querySelectorAll('.project-list__item')
  const title = document.querySelector('.project-list__title')

  if (!projectItem || !title) return

  const projectsAmount = projectItem.length
  title.textContent = `найдено ${format(projectsAmount)}`
} ()

void function () {
  const allProjectsBtn = document.querySelector('.project-list__filters-button:first-child');
  const filterBtns = document.querySelectorAll('.project-list__filters-button:not(:first-child)')

  console.log(allProjectsBtn)
  console.log(filterBtns)

  allProjectsBtn.addEventListener('click', (e) => {
    e.target.classList.add('_active');
    console.log(e.target)
    filterBtns.forEach(el => el.classList.remove('_active'))
  })

  filterBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('_active')) {
        e.target.classList.remove('_active');
        allProjectsBtn.classList.add('_active')
      } else {
        document.querySelectorAll('.project-list__filters-button').forEach(el => el.classList.remove('_active'))
        e.target.classList.add('_active');
      }
    })
  })
} ()





