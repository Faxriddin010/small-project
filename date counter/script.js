window.addEventListener('DOMContentLoaded', () => {
    const info = document.querySelector('.information'),
        btn = info.querySelector('button.date');
    let input = info.querySelector('input.date');

    btn.addEventListener('click', () => {
        input = input.value

        const deadLine = input

        function getTimerRemaining(endTime) {
            let days, hours, minutes, seconds;
            const timer = Date.parse(endTime) - Date.parse(new Date);

            if (timer <= 0) {
                days = 0
                hours = 0
                minutes = 0
                seconds = 0
            } else {
                days = Math.floor(timer / (1000 * 60 * 60 * 24))
                hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
                minutes = Math.floor((timer / 1000 / 60) % 60)
                seconds = Math.floor((timer / 1000) % 60)
            }

            return { timer, days, hours, minutes, seconds }
        }

        function setZero(num) {
            if (num >= 0 && num <= 10) {
                return '0' + num
            } else {
                return num
            }
        }

        function setClock(selector, endTime) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('.days'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000)

            updateClock()

            function updateClock() {
                const t = getTimerRemaining(endTime)


                days.textContent = setZero(t.days)
                hours.textContent = setZero(t.hours)
                minutes.textContent = setZero(t.minutes)
                seconds.textContent = setZero(t.seconds)

                days.classList.add('change')
                hours.classList.add('change')
                minutes.classList.add('change')
                seconds.classList.add('change')

                if (t <= 0) {
                    clearInterval(timeInterval)
                }
            }
        }

        setClock('.timer', deadLine)

        btn.style.display = 'none'
        document.querySelector('input').style.width = '100%'
    })


})