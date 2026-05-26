function trigonometria(rl, exibirMenu) {
    console.clear()
    console.log("====================================================================")
    console.log("----------CALCULAR AS FUNÇÕES TRIGONOMÉTRICAS DE UM ÂNGULO----------")
    console.log("====================================================================")
    rl.question("Digite um ÂNGULO (em graus): ", (angulo) => {
        if (isNaN(angulo)) {
            console.log("valor inválido...")
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        } else {
            let radianos = angulo * (Math.PI / 180)
            let seno = Math.sin(radianos)
            let cosseno = Math.cos(radianos)
            let tangente = Math.tan(radianos)
            console.log("Esse é o seno: " + seno.toFixed(4))
            console.log("Esse é o cosseno: " + cosseno.toFixed(4))
            console.log("Esse é o tangente: " + tangente.toFixed(4))
        }
        rl.question("PREssione ENTER para voltar ao menu...", () => {
            exibirMenu();
        })
    })
}

export default trigonometria