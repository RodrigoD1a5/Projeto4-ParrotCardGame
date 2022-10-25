var nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
const blocoCartas = document.querySelector('.bloco-cartas');
const inventarioCartas = [
    "./imagens/bobrossparrot.gif", "./imagens/explodyparrot.gif", "./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif", "./imagens/revertitparrot.gif", "./imagens/tripletsparrot.gif",
    "./imagens/unicornparrot.gif"];

let listaCartasSelecionadas = [];
let jogadas = 0;
let contadorDeCliques = 0;

while (nCartas % 2 !== 0 || nCartas < 4 || nCartas > 14) {
    alert("Número de cartas inválido. Tente novamente!");
    nCartas = Number(prompt("Com quantas cartas você quer?"));
}

distribuirCartas();


function distribuirCartas() {
    const cartasEscolhidasAleatoriamente = [];
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
        if (contadorDeCliques >= 2) {
            return;
        }
        contadorDeCliques++;

        const carta2 = cartaClicada.children[1].children[0].src;
        cartaClicada.classList.add('virada');

        if (listaCartasSelecionadas.length === 0) {
            listaCartasSelecionadas.push(cartaClicada);

        }
        else if (carta2 === listaCartasSelecionadas[0].children[1].children[0].src) {
            listaCartasSelecionadas = [];
            setTimeout(terminarJogo, 1000);
            contadorDeCliques = 0;
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
    contadorDeCliques = 0;
}

function terminarJogo() {
    if (document.querySelectorAll(".virada").length === nCartas) {
        let resposta = '';
        alert(`Você ganhou em ${jogadas} jogadas e em ${contadorMinuto.toLocaleString("pt-br",{minimumIntegerDigits:2})}:${contadorSegundo.toLocaleString("pt-br",{minimumIntegerDigits:2})}:${contadorCentesimo.toLocaleString("pt-br",{minimumIntegerDigits:2})}`);
        resposta = prompt('Deseja jogar novamente?(responda com "sim" ou não")');
        if (resposta === "sim") {
            location.reload();
        }
        else if (resposta === "não"){
            alert("Espero que tenha se divertido!");
            window.close();
        }
        else{
            terminarJogo();
        }
    }
}
//função para contar o tempo de jogo
let contadorCentesimo= 0;
let contadorSegundo = 0;
let contadorMinuto = 0;

const centesimo = document.querySelector(".c-segundo");
const segundo = document.querySelector(".segundo");
const minuto = document.querySelector(".minuto");

let codInterval;
codInterval = setInterval(incrementar, 10);


function incrementar() {
    contadorCentesimo+=1;

    if(contadorCentesimo===100){
        contadorSegundo++;
        contadorCentesimo=0
        segundo.innerHTML= contadorSegundo.toLocaleString("pt-br",{minimumIntegerDigits:2});
    }
    if(contadorSegundo === 59){
        contadorMinuto++;
        contadorSegundo=0;
        minuto.innerHTML= contadorMinuto.toLocaleString("pt-br",{minimumIntegerDigits:2});
        
    }
    centesimo.innerHTML= contadorCentesimo.toLocaleString("pt-br",{minimumIntegerDigits:2});

    if (document.querySelectorAll(".virada").length === nCartas) {
        clearInterval(codInterval);
    }
}

