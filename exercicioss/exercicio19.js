function exibirMaiorValor(rl, exibirMenu) {
    console.clear();
    console.log("=========================================")
    console.log("----------QUAL É O MAIOR VALOR?----------")
    console.log("=========================================")
    rl.question("Digite o primeiro valor: ", (v1) => {
        rl.question("Digite o segundo valor: ", (v2) => {
            if (!(isNaN(v1) || isNaN(v2))) {
                console.log("Valor inválido...")
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            } else if (Number(v1) > Number(v2)) {
                console.log(`${v1} é maior que ${v2}`)
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            } else if (Number(v2) > Number(v1)) {
                console.log(`${v2} é maior que ${v1}`)
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            }
        })
    })
}

export default exibirMaiorValor;