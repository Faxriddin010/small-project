const win = document.querySelector('.window')
win.addEventListener('mousemove', (e) => {
    const posX = e.pageX
    const posY = e.pageY
    const pos = document.createElement('div')
    pos.classList.add('circ')
    win.append(pos)
    pos.style.top = posY + 'px'
    pos.style.left = posX + 'px'
})