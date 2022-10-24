var nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
const blocoCartas = document.querySelector('.bloco-cartas');
const cartaParrot = document.querySelector('.card');
const inventarioCartas = [
    "./imagens/bobrossparrot.gif", "./imagens/explodyparrot.gif", "./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif", "./imagens/revertitparrot.gif", "./imagens/tripletsparrot.gif",
    "./imagens/unicornparrot.gif"];


while (nCartas % 2 !== 0 || nCartas < 4 || nCartas > 14) {
    alert("Número de cartas inválido. Tente novamente!");
    var nCartas = Number(prompt("Com quantas cartas você quer?"));
}

distribuirCartas();


function distribuirCartas() {
    inventarioCartas.sort(comparador);
    cartasEscolhidasAleatoriamente = [];
    for (let i = 0; i < nCartas / 2; i++) {
        cartasEscolhidasAleatoriamente.push(inventarioCartas[i]);
        cartasEscolhidasAleatoriamente.push(inventarioCartas[i]);
    }
    cartasEscolhidasAleatoriamente.sort(comparador);
    for (let i = 0; i < nCartas; i++) {
        blocoCartas.innerHTML += `<div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
          <img src="./imagens/back.png"/>
        </div>
        <div class="back-face face">
          <img src="${cartasEscolhidasAleatoriamente[i]}"/>
        </div>
    </div>`;
    }
}

function comparador() {
    return Math.random() - 0.5;
}
function virarCarta(cartaClicada) {
    cartaClicada.classList.add('virada');
}
