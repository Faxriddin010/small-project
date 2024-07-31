// first way
window.addEventListener('DOMContentLoaded', () => {
    const dice = document.querySelector('.dice'),
        rollBtn = document.querySelector('.btn--roll'),
        holdBtn = document.querySelector('.btn--hold'),
        activePlayer = document.querySelector('.player--active'),
        player1 = document.querySelector('.player--0'),
        player2 = document.querySelector('.player--1'),
        newGameBtn = document.querySelector('.btn--new');
    let current1 = +document.querySelector('#current--0').textContent,
        current2 = +document.querySelector('#current--1').textContent,
        score1 = +document.querySelector('#score--0').textContent,
        score2 = +document.querySelector('#score--1').textContent;

    dice.classList.add('hide')
    rollBtn.addEventListener('click', () => {
        dice.classList.remove('hide')
        let randomNum = Math.floor(Math.random() * 6) + 1;
        dice.src = `dice-${randomNum}.png`
        if (player1.classList.contains('player--active')) {
            if (randomNum === 1) {
                current1 = 0;
                document.querySelector('#current--0').textContent = current1;
                player1.classList.toggle('player--active')
                player2.classList.toggle('player--active')
            } else {
                current1 += randomNum;
                document.querySelector('#current--0').textContent = current1
            }

        } else if (player2.classList.contains('player--active')) {
            if (randomNum === 1) {
                current2 = 0;
                document.querySelector('#current--1').textContent = current2;
                player1.classList.toggle('player--active')
                player2.classList.toggle('player--active')
            } else {
                current2 += randomNum;
                document.querySelector('#current--1').textContent = current2;
            }
        }
    })

    holdBtn.addEventListener('click', () => {
        updateScore1()
        updateScore2()
        function updateScore1() {
            score1 += current1
            document.querySelector('#score--0').textContent = score1
            current1 = 0;
            document.querySelector('#current--0').textContent = current1;
        }

        function updateScore2() {
            score2 += current2
            document.querySelector('#score--1').textContent = score2
            current2 = 0;
            document.querySelector('#current--1').textContent = current2;
        }

        if (player1.classList.contains('player--active')) {
            player1.classList.toggle('player--active')
            player2.classList.toggle('player--active')
        } else if (player2.classList.contains('player--active')) {
            player1.classList.toggle('player--active')
            player2.classList.toggle('player--active')
        }

        if (score1 >= 100) {
            player1.classList.toggle('player--winner')
            player1.classList.add('player-active')
            player2.classList.remove('player-active')
            holdBtn.classList.add('hide')
            rollBtn.classList.add('hide')
        } else if (score2 >= 100) {
            player2.classList.toggle('player--winner')
            holdBtn.classList.add('hide')
            rollBtn.classList.add('hide')
        }
    })

    newGameBtn.addEventListener('click', () => {
        document.querySelector('#current--0').textContent = 0
        document.querySelector('#current--1').textContent = 0
        document.querySelector('#score--0').textContent = 0
        document.querySelector('#score--1').textContent = 0

        holdBtn.classList.remove('hide')
        rollBtn.classList.remove('hide')

        player1.classList.remove('player--winner')
        player2.classList.remove('player--winner')
    })
})