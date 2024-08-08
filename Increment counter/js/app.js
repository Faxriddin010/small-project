// window.addEventListener('DOMContentLoaded', () => {
const counters = document.querySelectorAll('.counter'),
    body = document.querySelector('body')

counters.forEach((counter) => {
    counter.textContent = '0'

    function updateCounter() {
        const target = +counter.getAttribute('data-target'),
            c = +counter.textContent,
            increment = target / 200

        if (c < target) {
            counter.textContent = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, .4)
        } else {
            counter.textContent = target
        }
    }
    updateCounter()
})

function gradientChanger() {
    setTimeout(body.style.background = 'linear-gradient(-40deg, rgb(6, 36, 74), rgb(97, 174, 236));', 600)
    setTimeout(body.style.background = 'linear-gradient(-40deg, rgb(97, 174, 236), rgb(6, 36, 75));', 600)
}
gradientChanger()
// })