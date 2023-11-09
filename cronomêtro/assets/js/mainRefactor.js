let isTimer;

let timerSeconds = document.querySelector('#seconds');
let timerMinutes = document.querySelector('#minutes');
let timerHour = document.querySelector('#hours');

function iniciar() {
    clearInterval(isTimer)
    _pauseTimerColor('pausado', false);

    isTimer = setInterval(() => {
        let seconds = new Number(timerSeconds.innerText);
        let minutes = new Number(timerMinutes.innerText);
        let hours = new Number(timerHour.innerText);
        
        if (isTimer) {
            timerSeconds.innerText = _getIncrementTimer(seconds);
            
            if (seconds == 60) {
                timerSeconds.innerText = '00';
                timerMinutes.innerText = _getIncrementTimer(minutes);
            }
            if (minutes == 60) {
                timerMinutes.innerText = '00';
                timerHour.innerText = _getIncrementTimer(hours);
            }
        }
    }, 1000);
}

function pausar() {
    clearInterval(isTimer)
    _pauseTimerColor('pausado', true);
}

function zerar() {
    clearInterval(isTimer)

    timerHour.innerText = '00';
    timerMinutes.innerText = '00';
    timerSeconds.innerText = '00';

    _pauseTimerColor('pausado', false);
}

function _getIncrementTimer(number) {
    let numberIncrement = number + 1;

    return numberIncrement <= 9 ? `0${numberIncrement}` : numberIncrement;
}

const _pauseTimerColor = (className, isAdd) => {
    let timesFull = document.querySelectorAll('.timer');

    for (let valor of timesFull) {
        if(isAdd) {
            valor.classList.add(className); 
        } else {
            valor.classList.remove(className);
        }
    }
}