const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

/* dark mode script start */
const modeLocal = localStorage.getItem('mode')

if (modeLocal) { darkMode() }

function darkMode() {
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}

darkBtn.addEventListener('click', () => {
    darkMode()
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', () => {
    darkMode()
    localStorage.setItem('mode', '')
})

/* dark mode script end */



