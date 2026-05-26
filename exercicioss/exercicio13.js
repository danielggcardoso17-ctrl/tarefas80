function velocidade(rl, exibirMenu) {
    console.clear()
    console.log("===============================================================")
    console.log("----------BEM VINDO A CALCULADORA DE VELOCIDADE FINAL----------")
    console.log("===============================================================")

    rl.question("Digite a velocidade inicial (m/s): ", (vinicial) => {
        rl.question("Digite a aceleração (m/s²): ", (aceleracao) => {
            rl.question("Digite o tempo do percurso (s): ", (tempo) => {
                if (isNaN(vinicial) || isNaN(aceleracao) || isNaN(tempo)) {
                    console.log("valor inválido...")
                    rl.question("Pressione ENTER para voltar ao menu...", () => {
                        exibirMenu();
                    })
                } else {
                    let resultado = (Number(vinicial) + (Number(aceleracao) * Number(tempo))) * 3.6
                    console.log("O resultado é: " + resultado + " km/h");
                }
                rl.question("Pressione ENTER para voltar ao menu...", () => {
                    exibirMenu();
                })
            })

        })
    })
}

export default velocidade;