const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex55(rl, exibirMenu) {
    console.clear()
    console.log("===================================================================")
    console.log("-----------EXIBIR UM NOVO ARRAY APÓS UMA MULTIPLICAÇÃO-------------")
    console.log("===================================================================")

    let array = []
    let array2 = []
    let valores;
    let multiplicador;

    multiplicador = parseFloat(await pergunta(rl, `Digite o multiplicador: `))
    if (isNaN(multiplicador)) {
        await pergunta(rl, `Valor inválido pressione ENTER para tentar novamente...`)
        ex55(rl, exibirMenu)
    }

    for (let i = 0; i < 20; i++) {
        valores = parseFloat(await pergunta(rl, `Digite o ${i + 1}o valor: `))
        if (isNaN(valores)) {
            await pergunta(rl, `Valor inválido pressione ENTER para tentar novamente...`)
            ex55(rl, exibirMenu)
        } else {
            array.push(valores)
            array2.push(valores * multiplicador)
        }
    }

    console.log(array)
    console.log(`ESSES SÃO OS NOVOS VALORES DO ARRAY MULTIPLICADOS PELA CONSTANTE MULTIPLICATIVA ${multiplicador}`)
    console.log(array2)

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu()

}