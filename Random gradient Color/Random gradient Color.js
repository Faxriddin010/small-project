const body = document.querySelector('body'),
    container = document.querySelector('.container'),
    colorTxt = document.querySelector('.color-text'),
    values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// random color function 

function getGradient() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.trunc(Math.random() * values.length)
        color += values[randomNumber]
    }

    return color
}


// set background color to body 
function setGradient() {
    const color1 = getGradient(),
        color2 = getGradient(),
        randomDeg = Math.trunc(Math.random() * 360),
        randomGradient = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
    body.style.background = randomGradient;
    colorTxt.textContent = `${randomGradient}`
}


container.addEventListener('click', () => {
    getGradient()
    setGradient()
})