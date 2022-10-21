var nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
const blocoCartas = document.querySelector('.bloco-cartas');
const carta = document.querySelector('.carta');


while (nCartas % 2 !== 0 || nCartas < 4 || nCartas > 14) {
    alert("Número de cartas inválido. Tente novamente!");
    var nCartas = Number(prompt("Com quantas cartas você quer?"));
}
distribuirCartas();

function distribuirCartas() {
    for (let i = 0; i < nCartas; i++) {
        blocoCartas.innerHTML += `<div class="carta">
        <img src="./imagens/back.png" class="parrot"/>
    </div>`;
    }
}

function virar(){
    carta.classList.add('virada');
    carta.innerHTML
    
}

