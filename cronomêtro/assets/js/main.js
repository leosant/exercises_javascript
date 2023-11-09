let isTimer;

var timerSeconds = document.querySelector('#seconds');
var timerMinutes = document.querySelector('#minutes');
var timerHour = document.querySelector('#hours');

let timesFull = document.querySelectorAll('.timer');

function iniciar() {
    clearInterval(isTimer)

    for (let valor of timesFull) {
        valor.style.color = 'black'; 
    }

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
    for (let valor of timesFull) {
        valor.style.color = 'red'; 
    }
}

function zerar() {
    clearInterval(isTimer)

    timerHour.innerText = '00';
    timerMinutes.innerText = '00';
    timerSeconds.innerText = '00';

    for (let valor of timesFull) {
        valor.style.color = 'red'; 
    }
}

function _getIncrementTimer(number) {
    let numberIncrement = number + 1;

    return numberIncrement <= 9 ? `0${numberIncrement}` : numberIncrement;
}