function espacoLivre(rl, exibirMenu) {
    console.clear()
    console.log("===========================================================")
    console.log("----------CALCULADORA DE ESPAÇO LIVRE DE UM AMBIENTE QUE CONTEM UMA ESFERA DENTRO DE UM CUBO----------")
    console.log("===========================================================")

    rl.question("Digite o raio da esfera (em cm): ", (r) => {
        rl.question("Digite a ARESTA do CUBO (em cm): ", (a) => {
            if (isNaN(r) || isNaN(a)) {
                console.log("valor inválido...")
                rl.question("Pressione ENTER para voltar ao menu...", () => {
                    exibirMenu();
                })
            } else {
                let resultado = Math.pow(a, 3) - (4 / 3) * Math.PI * Math.pow(r, 3)
                console.log("O resultado é: " + resultado.toFixed(2) + " cm³");
            }
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        })
    })
}

export default espacoLivre;