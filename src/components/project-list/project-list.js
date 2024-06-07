import {suffixObserver} from "features/suffixObserver";

const projectSuffixes = new Map([
  [ 'few', 'проекта' ],
  [ 'many', 'проектов' ],
  [ 'one', 'проект' ],
  [ 'other', 'проектов' ],
])

const title = document.querySelector('.project-list__title')
suffixObserver(title, projectSuffixes)

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





