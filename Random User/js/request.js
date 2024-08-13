// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

// toggle loader 
const loaderToggle = (toggle) => {
    if (toggle) {
        overlay.classList.remove('hidden')
    } else {
        overlay.classList.add('hidden')
    }
}

// request promise
const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                console.log('Loading...')
                loaderToggle(true)
            } else if (request.readyState == 4 && request.status == 200) {
                console.log('Successfully loaded')
                const data = JSON.parse(request.responseText)
                resolve(data.results)
                loaderToggle(false)
            } else if (request.readyState == 4 && request.status != 200) {
                reject('An error occured:' + request.status)
                loaderToggle(false)
            }
        })
        request.open('GET', resource)
        request.send()
    })
}

// load 
const reload = () => {
    getData(API)
        .then((data) => {
            updateUI(data)
        })
        .catch((err) => {
            console.error(err)
        })
}

window.addEventListener('DOMContentLoaded', reload)