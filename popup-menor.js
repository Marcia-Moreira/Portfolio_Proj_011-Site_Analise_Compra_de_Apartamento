//* Codigo para abrir POPOUP MENOR da página/Link

// Colocar esse trecho no HTML depois do link:
// onclick="abrirPopup(event, this.href)"

// Função para abrir o popup Tamanho Percentual:
function abrirPopup(event, url) {
    event.preventDefault(); // Evita que o link abra normalmente

    let larguraTela = window.innerWidth;
    let alturaTela = window.innerHeight;

    let larguraPopup = Math.round(larguraTela * 0.8); // 80% da largura da tela
    let alturaPopup = Math.round(alturaTela * 0.8);   // 80% da altura da tela

    let posX = Math.round((larguraTela - larguraPopup) / 2); // Centraliza no eixo X
    let posY = Math.round((alturaTela - alturaPopup) / 2);   // Centraliza no eixo Y

    window.open(url, "popup", `width=${larguraPopup},height=${alturaPopup},left=${posX},top=${posY}`);
}

// Função para abrir o popup Tamanho Fixo PX:
// function abrirPopup(event, url) {
    // Evita que o link abra normalmente:
    // event.preventDefault();
    // Define o tamanho em px:
    // window.open(url, "popup", "width=1200,height=600,left=100,top=100");
// }
