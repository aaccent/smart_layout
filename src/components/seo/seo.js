void function seoBlock() {
    const seoControls = document.querySelector('.seo__controls')

    if (!seoControls) return

    const seoButton = seoControls.querySelector('.seo button');
    const seoText = document.querySelector('.seo .seo__text');
    const arrow = seoControls.querySelector('.seo .seo__controls-arrow ');

    seoControls.addEventListener('click', () => {
        const isSeoTextOpened = seoText.classList.contains('_opened');

        if (isSeoTextOpened) {
            seoText.classList.remove('_opened');
            seoButton.textContent = 'разверуть';
            arrow.style.transform = 'rotate(90deg)';
        } else {
            seoText.classList.add('_opened');
            seoButton.textContent = 'свернуть';
            arrow.style.transform = 'rotate(270deg)';
        }
    })
}()