window.addEventListener('DOMContentLoaded', () => {
    const userSelect = document.querySelector('.mySelect'),
        players = [document.querySelector('#player1'), document.querySelector('#player2')],
        player1Btn = document.querySelector('#btnPlayer1'),
        player2Btn = document.querySelector('#btnPlayer2'),
        resetBtn = document.querySelector('#reset');
    let player1Score = document.querySelector('#player1'),
        player2Score = document.querySelector('#player2'),
        winScore = document.querySelector('.mySelect').value;

    userSelect.addEventListener('input', () => {
        reset()
        winScore = document.querySelector('.mySelect').value
        players.forEach(player => player.textContent = '0')
    })

    let player1 = +player1Score.textContent
    if (player1 < winScore) {
        player1Btn.addEventListener('click', () => {
            player1 = +player1Score.textContent
            player1++
            document.querySelector('#player1').textContent = player1
            if (player1 >= winScore) {
                player1Score.classList.add('win')
                player2Score.classList.add('lose')
                player1Btn.disabled = true
                player2Btn.disabled = true
            }
        })
    } else {
        player1Btn.disabled = true
    }

    let player2 = +player2Score.textContent
    if (player2 < winScore) {
        player2Btn.addEventListener('click', () => {
            player2 = +player2Score.textContent
            player2++
            document.querySelector('#player2').textContent = player2
            if (player2 >= winScore) {
                player2Score.classList.add('win')
                player1Score.classList.add('lose')
                player1Btn.disabled = true
                player2Btn.disabled = true
            }
        })
    } else {
        player2Btn.disabled = true
    }

    resetBtn.addEventListener('click', reset)

    function reset() {
        player1Score.classList.remove('win')
        player1Score.classList.remove('lose')
        player2Score.classList.remove('win')
        player2Score.classList.remove('lose')
        player1 = 0
        player2 = 0
        player1Score.textContent = player1
        player2Score.textContent = player2
    }
})