function ex33(rl, ex33, exibirMenu) {
    console.clear()
    console.log("============================================")
    console.log("----------NÃO SEI OQ ESCREVER AQUI----------")
    console.log("============================================")
    rl.question("Digite o primeiro valor: ", (valor1) => {
        rl.question("Digite o segundo valor: ", (valor2) => {
            const num1 = parseFloat(valor1)
            const num2 = parseFloat(valor2)

            while (num1 >= num2) {
                console.log("O valor 2 deve ser maior que o valor 1, digite novamente o segundo valor.")
                rl.question("Digite o segundo valor: ", (valor2) => {
                    const num2 = parseFloat(valor2)
                    if (num1 < num2) {
                        console.log(`O valor ${num2} é maior que ${num1}.`)
                        rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() })
                    }

                })

            }
        })
    })
}

export default ex33;