function mediaGeometrica(rl, exibirMenu) {
    console.clear()
    console.log("==========================================================================");
    console.log("--------BEM VINDO A CALCULADORA DE MÉDIA GEOMÉTRICA DE DOIS VALORES-------");
    console.log("==========================================================================");
    rl.question("Digite o primeiro valor: ", (valor1) => {
        rl.question("Digite o primeiro valor: ", (valor2) => {
            if (isNaN(valor1) || isNaN(valor2)) {
                console.log("digite um valor válido...")
            } else {
                let resultado = Math.sqrt(valor1 * valor2)
                console.log("O resultado da média geométrica é: " + resultado.toFixed(2))
            }
            rl.question("pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        })
    })
}

export default mediaGeometrica;