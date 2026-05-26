function VolCone(rl, exibirMenu) {
    console.clear()
    console.log("================================================================")
    console.log("----------BEM VINDO A CALCULADORA DE VOLUME DE UM CONE----------")
    console.log("================================================================")
    console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())
    rl.question("Digite a altura do cone (em cm): ", (altura) => {
        rl.question("Digite o raio da base do cone (em cm): ", (raio) => {
            if (isNaN(altura) || isNaN(raio)) {
                console.log("valor inválido...")
                rl.question("Pressione ENTER para voltar ao menu...", () => {
                    exibirMenu();
                })
            } else {
                let resultado = (3.14 * Math.pow(raio, 2) * altura) / 3
                console.log("O volume desse cone é: " + resultado.toFixed(2) + " cm³")
            }
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        })
    })
}

export default VolCone;