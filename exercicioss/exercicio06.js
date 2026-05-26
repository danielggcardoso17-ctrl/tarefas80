function mediaAritimetica(rl, exibirMenu) {
    console.clear();
    console.log("======================================================================");
    console.log("--------BEM VINDO A CALCULADORA DE MÉDIA DE 4 VALORES QUAISQUER-------");
    console.log("======================================================================");
    rl.question("Digite o primeiro valor: ", (valor1) => {
        rl.question("Digite o segundo valor: ", (valor2) => {
            rl.question("Digite o terceiro valor: ", (valor3) => {
                rl.question("Digite o quarto valor: ", (valor4) => {
                    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                        console.log("valor inválido...");
                        rl.question("pressione ENTER para voltar..", () => {
                            exibirMenu();
                        })
                    } else {
                        let resultado = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4
                        console.log("A média aritimética desses valores é: " + resultado.toFixed(2));
                    }
                    rl.question("pressione ENTER para voltar ao menu...", () => {
                        exibirMenu();
                    })
                })
            })
        })
    })

}
export default mediaAritimetica;