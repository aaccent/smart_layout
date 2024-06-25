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
