function pesoAlturaSex(rl, exibirMenu) {
    console.clear();
    console.log("=======================================================================")
    console.log("----------DESCUBRA SE SEU PESO É IDEAL COM BASE NO SEU GÊNERO----------")
    console.log("=======================================================================")
    rl.question("Digite sua altura em metros (ex: 1.80): ", (altura) => {
        rl.question("Digite seu sexo (M ou F): ", (sexo) => {
            rl.question("Digite seu peso(em kg): ", (peso) => {

                let resultado = peso / Math.pow(altura, 2)

                if (sexo === 'F' && resultado < 19) {
                    console.log("mulher abaixo do peso")
                } else if (sexo === 'F' && resultado < 24 && resultado >= 19) {
                    console.log("mulher com peso ideal")
                } else if (resultado >= 24) {
                    console.log("Mulher acima do peso")
                } else if (sexo === 'M' && resultado < 20) {
                    console.log("Homem abaixo do peso")
                } else if (sexo === 'M' && resultado < 25 && resultado >= 20) {
                    console.log("Homem com peso ideal")
                } else if (sexo === 'M' && resultado >= 25) {
                    console.log("Homem acima do peso")
                }
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            })
        })
    })
}

export default pesoAlturaSex;