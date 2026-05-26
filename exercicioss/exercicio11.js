function areaCirculo(rl, exibirMenu) {
    console.clear()
    console.log("=================================================================")
    console.log("----------BEM VINDO A CALCULADORA DE AREA DE UM CIRCULO----------")
    console.log("=================================================================")
    rl.question("Digite o diametro do circulo: ", (diametro) => {
        if (isNaN(diametro)) {
            console.log("valor inválido...")
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        } else {
            let resultado = Math.pow((diametro / 2), 2) * 3.14
            console.log("A área desse circulo é: " + resultado.toFixed(2) + " cm²")
        }
        rl.question("Pressione ENTER para voltar ao menu...", () => {
            exibirMenu();
        })
    })
}

export default areaCirculo;