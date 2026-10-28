// 1. Pegar os elementos do HTML pelo id
const botaoCurtir = document.getElementById("botao-curtir");
const botaoZerar = document.getElementById("botao-zerar");
const textoCurtidas = document.getElementById("curtidas");
const textoMensagem = document.getElementById("mensagem");

// 2. Variável que guarda quantas curtidas o post tem
let curtidas = 0;

// 3. Função que mostra o valor atual na tela
function atualizarTela() {
    textoCurtidas.textContent = curtidas;

    if (curtidas >= 10) {
        textoMensagem.textContent = "🔥 Seu post viralizou!";
    } else {
        textoMensagem.textContent = "";
    }
}

// 4. Quando clicar em "Curtir", soma 1 e atualiza a tela
botaoCurtir.addEventListener("click", function () {
    curtidas = curtidas + 1;
    atualizarTela();
});

// 5. Quando clicar em "Zerar", volta para 0
botaoZerar.addEventListener("click", function () {
    curtidas = 0;
    atualizarTela();
});