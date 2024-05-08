let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, Texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); - nao funcionou :(
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute =document.querySelector('input').value;

    if (chute == numeroSecreto){
       exibirTextoNaTela('h1', 'Acertou !');
       let palavraTentiva = tentativas > 1 ? 'tentivas' : 'tentativa';
       let mensagemTentivas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentiva}!`;
       exibirTextoNaTela('P', mensagemTentivas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'O numero secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O numero secreto é maior');
            }
            tentativas++;
            limparCampo();
    }
}

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }


    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}