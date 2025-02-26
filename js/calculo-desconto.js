// Código para Calcular as colunas de Descontos:

document.addEventListener("DOMContentLoaded", function () {
    let linhas = document.querySelectorAll("tbody tr");

    linhas.forEach((linha) => {
        // Pega o valor da área e do preço de venda:
        let area = parseFloat(linha.children[2].textContent.trim()); // Coluna 3 (índice 2)
        let precoTexto = linha.children[9].textContent.trim(); // Coluna 10 (índice 9)

        // Limpa o texto do preço e converte para número:
        let preco = parseFloat(precoTexto.replace("R$", "").replace(/\./g, "").replace(",", "."));

        // Se não conseguir converter, pula essa linha:
        if (isNaN(area) || isNaN(preco) || area === 0) {
            console.warn("Valores inválidos encontrados:", { area, preco });
            return;
        }

        // Calculo o preço por metro quadrado:
        let precoMetro = preco / area;
        linha.children[10].textContent = precoMetro.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        // Calculo dos descontos:
        let descontos = {
            5: preco * 0.95,  // 5% de desconto
            8: preco * 0.92,  // 8% de desconto
            10: preco * 0.90, // 10% de desconto
            15: preco * 0.85  // 15% de desconto
        };

        // Preencher as células dos descontos:
        linha.children[11].textContent = descontos[5].toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        linha.children[12].textContent = descontos[8].toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        linha.children[13].textContent = descontos[10].toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        linha.children[14].textContent = descontos[15].toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    });
});
