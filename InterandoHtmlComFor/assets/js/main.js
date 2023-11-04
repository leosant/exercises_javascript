const containerClass = document.querySelector('.container');

const objParagrafo = [
    { tag: 'p', texto: 'Tenha um ótimo dia!' },
    { tag: 'p', texto: 'Só sei que nada sei!' },
    { tag: 'h2', texto: 'A fé é o que nos sustenta!' },
    { tag: 'h1', texto: 'No ínicio era o verbo, e o verbo era Deus!' },
    { tag: 'p', texto: 'Fim de frases!' }
];

let tagsCreate = [];

for (let i = 0; i < objParagrafo.length; i++) {
    let { tag, texto } = objParagrafo[i]

    let tagHtml = document.createElement(tag);
    //tagHtml.innerHTML += texto;
    //tagHtml.innerText += texto;
    // Recomendado
    let textoNode = document.createTextNode(texto);
    tagHtml.appendChild(textoNode)

    containerClass.appendChild(tagHtml);
}