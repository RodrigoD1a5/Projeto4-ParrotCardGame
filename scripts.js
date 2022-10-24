var nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
const blocoCartas = document.querySelector('.bloco-cartas');
const inventarioCartas = [
    "./imagens/bobrossparrot.gif", "./imagens/explodyparrot.gif", "./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif", "./imagens/revertitparrot.gif", "./imagens/tripletsparrot.gif",
    "./imagens/unicornparrot.gif"];

let listaCartasSelecionadas = [];
let jogadas = 0;

while (nCartas % 2 !== 0 || nCartas < 4 || nCartas > 14) {
    alert("Número de cartas inválido. Tente novamente!");
    var nCartas = Number(prompt("Com quantas cartas você quer?"));
}

distribuirCartas();


function distribuirCartas() {
    let cartasEscolhidasAleatoriamente = [];
    inventarioCartas.sort(comparador);
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
    if (cartaClicada.classList.contains("virada") === false) {
        jogadas++;

        const carta2 = cartaClicada.children[1].children[0].src;
        cartaClicada.classList.add('virada');
        if (listaCartasSelecionadas.length === 0) {
            listaCartasSelecionadas.push(cartaClicada);
        }
        else if (carta2 === listaCartasSelecionadas[0].children[1].children[0].src) {
            listaCartasSelecionadas = [];
            setTimeout(TerminarJogo, 1000);
            return;
        }
        else {
            setTimeout(desvirar, 1000, listaCartasSelecionadas[0], cartaClicada);
            listaCartasSelecionadas = [];
        }
    }
}
function desvirar(x, y) {
    x.classList.remove("virada");
    y.classList.remove("virada");
}
function TerminarJogo() {
    if (document.querySelectorAll(".virada").length === nCartas) {
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}
