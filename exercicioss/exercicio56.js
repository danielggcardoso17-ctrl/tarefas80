const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex56(rl, exibirMenu) {
    console.clear()
    console.log("==============================================================")
    console.log("-----------EXIBIR UM ARRAY APÓS UMA MULTIPLICAÇÃO-------------")
    console.log("==============================================================")

    let x = parseFloat(await pergunta(rl, "Digite a quantidade de valores que voce quer digitar: "))
    let array = []

    if (isNaN(x) || x > 20 || x <= 0) {
        console.log("A quantidade deve ser menor ou igual a 20")
        x = await pergunta(rl, "Digite uma quantidade válida: ")
    } else {
        for (let i = 0; i < x; i++) {
            let valores = await pergunta(rl, `Digite o ${i + 1}o valor: `)
            if (isNaN(valores)) {
                await pergunta(rl, `Valor inválido pressione ENTER para tentar novamente...`)
                ex56(rl, exibirMenu)
            } else {
                array.push(valores)
            }
        }
    }

    let indice = parseFloat(await pergunta(rl, "consulte um valor desse conjunto de números digitando seu indice: "))

    if (isNaN(indice) || indice < 0 || indice > x) {
        console.log("valor nao encontrado")
        await pergunta(rl, `Pressione ENTER para tentar novamente...`)
        ex56(rl, exibirMenu)
    } else {
        console.log(`O elemento é: ${array[indice]}`)
    }

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu()
}