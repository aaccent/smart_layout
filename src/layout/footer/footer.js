void function () {
  const menuItems = document.querySelectorAll('.footer__menu-item:has( [data-action="footer-menu"])')
  menuItems.forEach(item => {
    const title = item.querySelector('[data-action="footer-menu"]')

    title.addEventListener('click', () => {
      item.classList.toggle('_active')
    })
  })
}()

void function () {
  const scrollUpButton = document.querySelector('[data-action="scroll-up"]')
  if(!scrollUpButton) return

  scrollUpButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
}()