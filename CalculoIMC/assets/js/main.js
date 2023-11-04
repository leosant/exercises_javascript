function main() {   
    const form = document.querySelector("form")

    form.onsubmit = (evento) => {
        evento.preventDefault();

        let peso = _getTargetValue(evento, "#peso");
        let altura = _getTargetValue(evento, "#altura");

        let campoErro = _isNumeroValido(peso, altura)

        const footerResultadoHtml = _getHtmlFooterResultado();

        if(campoErro.isNumeroValido) {
            let resultado = _calcularImc(peso, altura);
            let classificacao = _getClassificaoImc(resultado);

            _aplicarBackGroundColorHtmlFooterResultado(footerResultadoHtml, classificacao.cor);

            const resultadoMensagem =  _getMensagemResultadoImc(classificacao.mensagem, resultado);
            _mostrarResultadoImcHtml(footerResultadoHtml, resultadoMensagem);

        } else {
            _aplicarBackGroundColorHtmlFooterResultado(footerResultadoHtml, campoErro.cor);
            _mostrarResultadoImcHtml(footerResultadoHtml, campoErro.mensagem);
        }
    
    }
}

function _mostrarResultadoImcHtml(footerResultadoHtml, mensagem) {
    const tagParagrafo = document.createElement('p');
    tagParagrafo.innerHTML = mensagem;
    footerResultadoHtml.appendChild(tagParagrafo);
}

function _getMensagemResultadoImc(mensagem, resultado) {
    return `Seu IMC é: ${mensagem} -> ${resultado}`;
}

function _aplicarBackGroundColorHtmlFooterResultado(footerResultadoHtml, cor) {
    footerResultadoHtml.style.backgroundColor = cor;
}

function _getClassificaoImc(resultado) {
    
    const classificacoes = [
        { limite: 18.5, mensagem: "Abaixo do Peso", cor: "#6A5ACD"},
        { limite: 24.9, mensagem: "Peso normal", cor: "#00FFFF" },
        { limite: 29.9, mensagem: "Sobrepeso", cor: "#F4A460" },
        { limite: 34.9, mensagem: "Obesidade grau 1", cor: "#4B0082" },
        { limite: 39.9, mensagem: "Obesidade grau 2", cor: "#FF00FF" },
        { limite: Infinity, mensagem: "Obesidade grau 3", cor: "#DC143C"}
    ];

    for (const classificacao of classificacoes) {
        if (resultado <= classificacao.limite) {
            return classificacao;
        }
    }
    
    alert("Ocorreu um problema ao validar seu IMC. Tente novamente mais tarde!");
    
}

function _calcularImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function _getHtmlFooterResultado() {
    const footerResultadoHtml = document.getElementById("resultado");
    footerResultadoHtml.innerHTML = "";

    return footerResultadoHtml;
}

function _isNumeroValido(peso, altura) {
    peso = Number(peso);
    altura = Number(altura);

    let campoErro = "";
    
    if (!peso) {
        campoErro = { 
                isNumeroValido: false,
                mensagem: "Peso invalido",
                cor: "#FF0000"
            };
    } else if (!altura) {
        campoErro = { 
            isNumeroValido: false,
            mensagem: "Altura invalida",
            cor: "#FF0000"
        };
    } else {
        campoErro = { 
            isNumeroValido: true,
            mensagem: null,
            cor: null
        };
    }

    return campoErro;
}

function _getTargetValue(evento ,nameSelector) {
    return evento.target.querySelector(nameSelector).value;
}