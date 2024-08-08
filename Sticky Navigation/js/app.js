window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header'),
    links = document.querySelectorAll('.sitenav-link');

  document.addEventListener('scroll', (e) => {
    if (window.scrollY > header.clientHeight) {
      header.classList.add('white-header')
    } else {
      header.classList.remove('white-header')
    }
  })

  links.forEach((link) => {
    console.log(link)
    link.addEventListener('click', (e) => {
      e.preventDefault()
      links.forEach((link) => {
        link.classList.remove('active')
      })
      link.classList.add('active')
    })
  })
})

