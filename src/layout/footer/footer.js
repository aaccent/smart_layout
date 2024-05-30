void function () {
  const menuItems = document.querySelectorAll('.footer__menu-item:has( [data-action="footer-menu"])')
  menuItems.forEach(item => {
    const title = item.querySelector('[data-action="footer-menu"]')

    title.addEventListener('click', () => {
      item.classList.toggle('_active')
    })
  })
}()