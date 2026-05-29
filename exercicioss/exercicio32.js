function apenasPositivo(rl, exibirMenu) {
    console.clear();
    console.log("=============================================================")
    console.log("----------APENAS VALORES POSITVIOS SÃO ACEITOS AQUI----------")
    console.log("=============================================================")
    rl.question("Digite um valor: ", (value) => {
        let valor = eval(value)

        if (valor <= 0) {
            console.log("apenas números positivos são aceitos")
            rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() })
        } else {
            console.log(`O valor ${valor.toFixed(2)} foi aceito`)
            rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() })
        }
    })
}

export default apenasPositivo;