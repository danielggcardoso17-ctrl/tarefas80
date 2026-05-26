function tensaoCircuito(rl, exibirMenu) {
    console.clear()
    console.log("========================================================================");
    console.log("--------BEM VINDO A CALCULADORA DE TENSÃO DE UM CIRCUITO ELÉTRICO-------");
    console.log("========================================================================");
    rl.question("Digite o valor da resistência do circuito: ", (res) => {
        rl.question("Digite o valor da corrente elétrica do circuito: ", (corrente) => {
            if (isNaN(res) || isNaN(corrente)) {
                console.log("valores inválidos...")
                rl.question("Aperte ENTER para voltar ao menu...", () => {
                    exibirMenu();
                })
            } else {
                let resultado = res * corrente
                console.log("O resultado da TENSÃO é: " + resultado.toFixed(2) + "Volts");
            }
            rl.question("Aperte ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        })
    })
}

export default tensaoCircuito;