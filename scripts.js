var nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
const blocoCartas = document.querySelector('.bloco-cartas');
const carta = document.querySelector('.carta');
const inventarioCartas=[
    "./imagens/bobrossparrot.gif","./imagens/explodyparrot.gif","./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif","./imagens/revertitparrot.gif","./imagens/tripletsparrot.gif",
    "./imagens/unicornparrot.gif"];


while (nCartas % 2 !== 0 || nCartas < 4 || nCartas > 14) {
    alert("Número de cartas inválido. Tente novamente!");
    var nCartas = Number(prompt("Com quantas cartas você quer?"));
}

distribuirCartas();


function distribuirCartas() {
    inventarioCartas.sort(comparador);
    cartasEscolhidasAleatoriamente = [];
    for(let i=0; i<nCartas/2 ;i++){
        cartasEscolhidasAleatoriamente.push(inventarioCartas[i]);
        cartasEscolhidasAleatoriamente.push(inventarioCartas[i]);
    }
    cartasEscolhidasAleatoriamente.sort(comparador);
    for (let i = 0; i < nCartas; i++) {
        blocoCartas.innerHTML += `<div class="carta">
        <img src="./imagens/back.png" class="parrot" />
        <img src=${cartasEscolhidasAleatoriamente[i]} class="carta-verso" />
    </div>`;
    }
}


function virar(){
    carta.classList.add('virada');
    carta.innerHTML
    
}


function comparador() { 
	return Math.random() - 0.5; 
}

