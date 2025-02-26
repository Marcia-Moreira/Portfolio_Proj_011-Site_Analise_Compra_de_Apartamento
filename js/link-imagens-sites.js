// Link Imagens dos Sites:

document.addEventListener("DOMContentLoaded", function () {
    // Pega todos os links da tabela que possuem um data-apto
    var linksOriginais = document.querySelectorAll(".link-imovel");

    // Pega todos os links de destino (na seção do apartamento)
    var linksCopias = document.querySelectorAll(".link-copia");

    // Cria um objeto para mapear os links originais pelo 'data-apto'
    var mapaLinks = {};

    // Preenche o objeto com os links da tabela
    linksOriginais.forEach(link => {
        var idApto = link.getAttribute("data-apto");
        if (idApto) {
            mapaLinks[idApto] = link.href;  // Associa o ID ao href
        }
    });

    // Agora, para cada link na seção do apto, preenchemos com o link correto
    linksCopias.forEach(link => {
        var idApto = link.getAttribute("data-apto");
        if (idApto && mapaLinks[idApto]) {
            link.href = mapaLinks[idApto];  // Copia o link certo
        }
    });
});