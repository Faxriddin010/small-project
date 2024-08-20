const img = document.querySelector('img')

window.addEventListener('scroll', () => {
    // console.log(scrollY)
    /* 
    
    0
    0.8
    1.6
    2.4
    3.2
    4

    */
    if (scrollY >= 0.8 && scrollY <= 4) {
        img.style.transform = `scale(${scrollY + 0.2})`
        console.log(scrollY)
    }
})