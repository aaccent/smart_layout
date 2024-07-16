import { isDesktop, isMobile } from 'globals/adaptive'

void function mobileMenu() {
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

void function mobileMenuItems() {
  const menuItems = document.querySelectorAll('.header__menu-item:has(.header__submenu)')

  menuItems.forEach(item => {
    const text = item.querySelector('.header__menu-item-text')

    text.addEventListener('click', () => {
      item.classList.toggle('_active')
    })
  })
}()

void function detailMenu() {
  if (isMobile) return

  const detailedItems = document.querySelectorAll('.header__menu-item--detailed')

  detailedItems.forEach(item => {
    const submenu = item.querySelector('.header__submenu')

    item.addEventListener('mouseenter', () => {
      document.body.classList.add('_active-menu')
    })

    submenu.addEventListener('mouseleave', (e) => {
      if (item.contains(e.toElement)) return

      console.log(e)
      document.body.classList.remove('_active-menu')
    })
  })
}()

void function detailMenuMobile() {
  if (isDesktop) return

  const detailedItemsSubmenus = document.querySelectorAll('.header__menu-item--detailed')
  const logoWrapper = document.querySelector('.header__logo-wrapper')

  detailedItemsSubmenus.forEach((item) => {
    const submenu = item.querySelector('.header__submenu')

    const clone = logoWrapper.cloneNode(true)
    clone.querySelector('.header__menu-btn')?.addEventListener('click', () => {
      item.classList.remove('_active')
    })

    submenu.prepend(clone)
  })
}()

void function stickyHeader() {
  const header = document.querySelector('.header')
  const SCROLL_LIMIT = 25
  const STICKY_CLASS_NAME = 'header--sticky'

  function toggleStickyHeader() {
    const hasSticky = header.classList.contains(STICKY_CLASS_NAME)
    if (window.scrollY > SCROLL_LIMIT && !hasSticky) {
      header.classList.add(STICKY_CLASS_NAME)
    } else if (window.scrollY < SCROLL_LIMIT && hasSticky) {
      header.classList.remove(STICKY_CLASS_NAME)
    }
  }

  toggleStickyHeader()

  window.addEventListener('scroll', () => {
    toggleStickyHeader()
  })
}()