const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex52(rl, exibirMenu) {
    console.clear()
    console.log("=======================================================")
    console.log("-----------EXIBIR VALORES NA ORDEM INVERSA-------------")
    console.log("=======================================================")

    let arr = []
    let valor;

    for (let i = 0; i < 10; i++) {
        valor = parseFloat(await pergunta(rl, `Digite o ${i + 1}o número: `))
        if (isNaN(valor)) {
            console.log("valor inválido...")
            await pergunta(rl, `Pressione ENTER para tentar novamente...`)
            ex52(rl, exibirMenu)
        } else {
            arr.push(valor)
        }
    }

    arr.reverse()

    for (let valores of arr) {
        console.log(valores)
    }

    await pergunta(rl, `Pressione ENTER para voltar ao menu...`)
    exibirMenu()

}