void function () {
  const scrollButton = document.querySelector('.arrow')

  if (!scrollButton) return

  const firstBlock = document.querySelector('main .section-wrapper')

  scrollButton.addEventListener('click', () => {
    console.log('click')
    firstBlock.scrollIntoView()
  })
}()

