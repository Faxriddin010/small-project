const li = document.querySelectorAll('li'),
    circle = document.querySelector('circle');

li.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        li.forEach((item) => item.style.color = '#2D79D1')
        item.style.color = 'white'
    })
    item.addEventListener('mouseleave', () => {
        li.forEach((item) => item.style.color = 'white')
    })
})

window.addEventListener('mousemove', (e) => {
    const pageX = e.pageX
    const pageY = e.pageY

    circle.style.top = pageY + 'px'
    circle.style.left = pageX + 'px'
})