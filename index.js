var interior = window.document.getElementById("interior")
var arquitetura = window.document.getElementById("arquitetura")
var casa = window.document.getElementById("casa")
var areas = window.document.getElementById("areas")

var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDideita = window.document.getElementById("seta-direita")

function ProximaImagem() {
    interior.style = "display:none";
    areas.style = "display:flex";
    setaDideita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function imagemAnterior() {
    interior.style = "display:flex";
    areas.style = "display:none";
    setaEsquerda.style = "display:none"
    setaDideita.style = "display:flex"
}