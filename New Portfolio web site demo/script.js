window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header'),
            navigation = document.querySelector('nav');
        header.classList.toggle('sticky', window.scrollY > 0)
        navigation.classList.toggle('sticky', window.scrollY > 0)
    })

    const menuBtn = document.querySelector('.menu-btn'),
        navigation = document.querySelector('.navigation');
        naviagtionItems = document.querySelectorAll('.navigation a')

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    naviagtionItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0 
        document.documentElement.scrollTop = 0
    })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')

        for(let i=0; i<reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top
            let revealPoint = 50

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })
})















