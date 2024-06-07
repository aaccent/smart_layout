const pluralRule = new Intl.PluralRules('ru-RU')

function format(n: number, formatter: Map<string, string>) {
    const rule = pluralRule.select(n)
    return formatter.get(rule)
}

function changeSuffix(element: Element, suffixesMap: Map<string, string>) {
    const amount = element.querySelector('.amount')
    const suffix = element.querySelector('.suffix')

    if (!amount || !suffix) return

    const suffixNum = Number(amount.textContent)
    suffix.textContent = ` ${format(suffixNum, suffixesMap)}`
}

export function suffixObserver(element: Element | null, suffixesMap: Map<string, string>) {
    if (!element) return

    changeSuffix(element, suffixesMap)

    let observer = new MutationObserver(() => {
        changeSuffix(element, suffixesMap)
    })

    observer.observe(element, { childList: true, subtree: true })
}