const selectEl = selector => {
    let el = document.querySelector(selector)
    if (el) return el
    throw new Error(`Something went wrong. ${selector} does not exists.`)
}

const scrollHeader = () => {
    let headerEl = selectEl('#header')
    if (this.scrollY >= 15) {
        headerEl.classList.add('activated')
    } else {
        headerEl.classList.remove('activated')
    }
}

window.addEventListener('scroll', scrollHeader)