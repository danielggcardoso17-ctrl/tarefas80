function velocidadee(rl, exibirMenu) {
    console.clear();
    console.log("=========================================")
    console.log("----------EXIBIR SUA VELOCIDADE----------")
    console.log("=========================================")
    rl.question("Digite a aceleração (m/s²): ", (a) => {
        rl.question("Digite a velocidade inicial (m/s): ", (vini) => {
            rl.question("Digite o tempo do percurso (s): ", (time) => {
                const ac = Number(a)
                const v0 = Number(vini)
                const t = Number(time)
                let resultado = (v0 * t) + ac

                if (resultado <= 40) {
                    console.log("Veículo muito limpo")
                } else if (resultado <= 60 && resultado > 40) {
                    console.log("Velocidade permitida")
                } else if (resultado <= 80 && resultado > 60) {
                    console.log("Velocidade de cruzeiro")
                } else if (resultado <= 120 && resultado > 80) {
                    console.log("Veículo rápido")
                } else if (resultado > 120) {
                    console.log("Veículo muito rápido")
                }
                rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() })
            })
        })
    })
}

export default velocidadee