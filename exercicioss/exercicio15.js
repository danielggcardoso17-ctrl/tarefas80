function converterDolar(rl, exibirMenu) {
    console.clear();
    console.log("==============================================")
    console.log("----------CONVERTER DÓLAR PARA REAIS----------")
    console.log("==============================================")
    rl.question("Digite a cotação do dólar hoje: ", (cotacao) => {
        rl.question("Digite o valor em dólar que voce quer conveter: ", (dolar) => {
            if (isNaN(cotacao) || isNaN(dolar)) {
                console.log("valor inválido...")
                rl.question("PREssione ENTER para voltar ao menu...", () => {
                    exibirMenu();
                })
            } else {
                let resultado = dolar / cotacao
                console.log("Isso equivale a: " + "R$" + resultado.toFixed(2))
            }
            rl.question("PREssione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        })
    })
}

export default converterDolar;