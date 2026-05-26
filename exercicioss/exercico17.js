function potenciacao(rl, exibirMenu) {
    console.clear()
    console.log("==================================")
    console.log("----------elevar o X a Y----------")
    console.log("==================================")
    rl.question("Entre com o valor de X: ", (x) => {
        rl.question("Entre com o valor de Y: ", (y) => {
            if (isNaN(x) || isNaN(y)) {
                console.log("valor inválido...")
                rl.question("Pressione ENTER para voltar ao menu...", () => {
                    exibirMenu();
                })
            } else {
                let resultado = Math.pow(x, y)
                console.log("O resultado dessa potenciação é: " + resultado.toFixed(2))
            }
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        })
    })
}

export default potenciacao;