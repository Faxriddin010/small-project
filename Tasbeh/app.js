window.addEventListener('DOMContentLoaded', () => {
    // add consts 
    const choose = document.getElementsByName('Choose sentence')[0],
        resetBtn = document.querySelector('.reset-btn');
    btn = document.querySelector('.image');
    // add variables 
    let increase = +document.querySelector('.increase').textContent,
        returns = +document.querySelector('.returns').textContent;

    btn.addEventListener('click', () => {
        let aim = +document.getElementsByName('Aim')[0].value
        if (increase < aim) {
            if (increase < 9) {
                increase++
                document.querySelector('.increase').textContent = `0${increase}`
            } else {
                increase++
                document.querySelector('.increase').textContent = increase
            }
        } else {
            returns++
            document.querySelector('.returns').textContent = returns
            increase = 0
            document.querySelector('.increase').textContent = increase
        }
    })

    // add Event Listeners for Reset 
    let aim = document.getElementsByName('Aim')[0]
    aim.addEventListener('input', reset)
    choose.addEventListener('input', reset)
    resetBtn.addEventListener('click', reset)

    // add functions
    function reset() {
        increase = '00'
        document.querySelector('.increase').textContent = increase
        returns = 0
        document.querySelector('.returns').textContent = returns
    }
})
