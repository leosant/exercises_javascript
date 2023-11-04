const containerClass = document.querySelector('.container');
const paragrafos = document.querySelectorAll('p');

let backgroundPage = getComputedStyle(document.body).backgroundColor;

console.log(paragrafos)
/*
for(let paragrafo of paragrafos) {
    paragrafo.style.backgroundColor = backgroundPage;
    paragrafo.style.color = '#ffffff';
}*/

const style = {
    backgroundColor: backgroundPage || 'black',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '5px'
};

//Utilizando outro modelo de for
for(let index in paragrafos) {
    let indexNumber = new Number(index);
    let isPar = (indexNumber+1) % 2 == 0;
    
    if (isPar) continue;

    paragrafos[index].style.backgroundColor = style.backgroundColor;
    paragrafos[index].style.color = style.color;
    paragrafos[index].style.borderRadius = style.borderRadius;
    paragrafos[index].style.padding = style.padding;
    
}