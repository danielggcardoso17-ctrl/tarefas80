function pesoAltura(rl, exibirMenu) {
    console.clear();
    console.log("================================================")
    console.log("----------DESCUBRA SE SEU PESO É IDEAL----------")
    console.log("================================================")
    rl.question("Digite sua altura em metros (ex: 1.80): ", (altura) => {
        rl.question("Digite seu peso(em kg): ", (peso) => {
            let resultado = peso / Math.pow(altura, 2)
            if (isNaN(altura && peso)) {
                console.log("Valor inválido...")
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            } else if (resultado < 20) {
                console.log("Abaixo do peso")
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            } else if (resultado < 25 && resultado >= 20) {
                console.log("Peso ideal")
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            } else if (resultado >= 25) {
                console.log("Acima do peso")
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            }
            rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
        })
    })
}

export default pesoAltura;