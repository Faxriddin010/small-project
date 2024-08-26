/* starter scripts [start] */
const header = document.querySelector('h1'),
    descr = document.querySelector('p'),
    title = document.querySelector('title'),
    message = document.querySelector('.message'),
    form = document.querySelector('form'),
    resetBtn = document.querySelector('.reset')
container = document.querySelector('.container');

container.appendChild(message)
header.textContent = 'Random Number'
title.textContent = 'Random Number | GAME | FADDI'
message.textContent = 'Find a random number from 1 to 100 in 8 tries'

focus()
let randomNumber = randomNum(),
    tries = 0;

/* starter scripts [end] */

/* add functions [start] */
function randomNum() {
    const number = Math.trunc(Math.random() * 100) + 1
    return number
}

function messager(value, randomNum) {
    if (value < randomNum) {
        return 'less'
    } else if (value > randomNum) {
        return 'bigger'
    }
}

function newGame() {
    tries = 0
    randomNumber = randomNum()
    message.textContent = 'Select number from 1 to 100'
    message.classList.remove('success')
    message.classList.remove('error')
    form.value.disabled = false
}

function focus() {
    form.value.focus()
}
/* add functions [end] */

/* add Event Listeners [start] */
resetBtn.addEventListener('click', (e) => {
    newGame()
    focus()
})

window.addEventListener('keydown', (e) => {
    if (e.key == 'f') {
        newGame()
        focus()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    tries++
    const inputVal = +form.value.value
    if (inputVal == randomNumber) {
        message.textContent = `You win in ${tries} tries! Click reset button or press 'F' key on keyboard for start a new game`
        message.classList.remove('error')
        message.classList.add('success')
        form.value.disabled = true
    } else if (inputVal != randomNumber) {
        message.textContent = `Number ${inputVal} is ${messager(inputVal, randomNumber)} than Random Number. `
        message.classList.add('error')
        message.classList.remove('success')
        if (tries >= 8) {
            message.textContent =
                `
            Random number is ${randomNumber}. You try 8 times! And you lose. Click reset button or press 'F' key on keyboard for start new game
            `
            form.value.disabled = true
            message.classList.add('error')
            message.classList.remove('success')
        }
    }
    form.reset()
})
/* add Event Listeners [end] */