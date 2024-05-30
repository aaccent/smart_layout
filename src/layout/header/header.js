import { isMobile } from 'globals/adaptive'

void function() {
  const menuBtns = document.querySelectorAll('[data-action="mobile-menu"]')
  const header = document.querySelector('.header')
  const mobileWrapper = document.querySelector('.header__mobile-wrapper')

  function toggleMobileMenu() {
    header.classList.toggle('header--open-menu')

    mobileWrapper.style.height = `calc(100svh - ${header.offsetHeight}px)`
  }

  menuBtns.forEach(btn => {
    btn.addEventListener('click', toggleMobileMenu)
  })
}()

void function() {
  if (!isMobile) return

  const menu = document.querySelector('.header__menu')
  const mainMenuItems = document.querySelectorAll('.header__menu-item[data-main-menu]')

  const wrapper = document.createElement('li')
  wrapper.className = 'header__menu-item'
  wrapper.innerHTML = '<span class="header__menu-item-text">Меню</span>'

  const submenu = document.createElement('div')
  submenu.className = 'header__submenu'

  const submenuList = document.createElement('ul')
  submenuList.className = 'header__submenu-list'

  mainMenuItems.forEach(item => {
    const itemText = item.querySelector('a.header__menu-item-text')

    const li = document.createElement('li')
    li.innerHTML = `<a href="${itemText.href}">${itemText.textContent}</a>`

    submenuList.append(li)
    item.remove()
  })

  submenu.append(submenuList)
  wrapper.append(submenu)
  menu.prepend(wrapper)
}()

void function () {
  const menuItems = document.querySelectorAll('.header__menu-item:has(.header__submenu)')

  menuItems.forEach(item => {
    const text = item.querySelector('.header__menu-item-text')

    text.addEventListener('click', () => {
      item.classList.toggle('_active')
    })
  })
}()