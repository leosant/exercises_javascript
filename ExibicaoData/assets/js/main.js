const containerClass = document.querySelector('.container');
const h1Html = document.querySelector('.container2 h1');


const date = new Date('December 17, 1995 03:04:00');

h1Html.innerHTML += getFormatDate();

const paragrafo = document.createElement('h3');
paragrafo.innerHTML = formatDateDocumentation(); //getFormatDate();
containerClass.appendChild(paragrafo);

/**
 * Com a documentação mdn o código se resume apenas um método
 * com apenas três linhas
 * @returns 
 */
function formatDateDocumentation() {
    return new Intl.DateTimeFormat('pt-Br', {
        dateStyle: 'full',
        timeStyle: 'short'
    }).format(date);
};

function getFormatDate() {
    const dayOfWeekPtBr = _getDayWeekFormatPtBr(date.getDay());
    const dayOfMonth = date.getDate();
    const monthPtBr = _getMonthPtBr(date.getMonth());
    const year = date.getFullYear();
    const hoursFull = _getHoursWithMinutesFormatPtBr(date.getHours(), date.getMinutes());

    const dateView = {
        dayOfWeek: dayOfWeekPtBr,
        dayOfMonth: dayOfMonth,
        month: monthPtBr,
        year: year,
        hoursFull: hoursFull
    }
    
    return _getDatePtBrString(dateView);
};

function _getDatePtBrString(dateView) {
    return `${dateView.dayOfWeek}, ${dateView.dayOfMonth} de ${dateView.month} de ${dateView.year} </br>
     ${dateView.hoursFull}`;
};

function _getHoursWithMinutesFormatPtBr(hours, minutes) {
    return `${hours}:${minutes < 10 ? '0'+minutes : minutes}`;
};

function _getMonthPtBr(monthNumber) {
    const monthPtBr = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ]
    
    return monthPtBr[monthNumber];
};

function _getDayWeekFormatPtBr(dayWeekNumber) {

    switch(dayWeekNumber) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            alert('Ocorreu um erro inesperado na conversão do dia da semana');
    }
};