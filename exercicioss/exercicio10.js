function celsiusToFahren(rl, exibirMenu) {
    console.clear()
    console.log("=================================================================");
    console.log("--------BEM VINDO AO CONVERSOR DE CELSIUS PARA FAHRENHEINT-------");
    console.log("=================================================================");
    rl.question("Digite o valor em Celsius: ", (c) => {
        if (isNaN(c)) {
            console.log("valor inválido...")
            rl.question("Aperte ENTER para voltar...", () => {
                exibirMenu()
            })
        } else {
            let resultado = (c * 1.8) + 32
            console.log("O resultado em Fahrenheint é: " + resultado.toFixed(2))
        }
        rl.question("Aperte ENTER para voltar...", () => {
            exibirMenu()
        })
    })
}

export default celsiusToFahren;