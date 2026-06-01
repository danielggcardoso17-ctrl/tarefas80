function ex36(rl, exibirMenu) {
    console.clear();
    console.log("====================================================")
    console.log("-----------TABUADA DE UM VALOR QUALQUER-------------")
    console.log("====================================================")
    rl.question("Digite um valor para exibir sua tabuada: ", (valor) => {
        let value = parseFloat(valor)

        if (isNaN(value)) {
            console.log("Valor inválido...")
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        } else {
            for (let i = 1; i <= 10; i++) {
                console.log(`${value} x ${i} = ${value * i}`)
            }
        }
        rl.question("Pressione ENTER para voltar ao menu...", () => {
            exibirMenu();
        })
    })
}

export default ex36;
