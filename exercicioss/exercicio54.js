const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex54(rl, exibirMenu) {
    console.clear()
    console.log("==============================================================")
    console.log("-----------EXIBIR UM ARRAY APÓS UMA MULTIPLICAÇÃO-------------")
    console.log("==============================================================")

    let array = []
    let valores;
    let multiplicador;

    multiplicador = parseFloat(await pergunta(rl, `Digite o multiplicador: `))

    for (let i = 0; i < 20; i++) {
        valores = parseFloat(await pergunta(rl, `Digite o ${i + 1}o valor: `))
        if (isNaN(valores)) {
            await pergunta(rl, `Valor inválido pressione ENTER para tentar novamente...`)
            ex54(rl, exibirMenu)
        } else {
            array.push(valores * multiplicador)
        }
    }
    // for (let valores of array) {
    //     valores * 5
    // }
    console.log(`ESSES SÃO OS NOVOS VALORES DO ARRAY MULTIPLICADOS PELA CONSTANTE MULTIPLICATIVA ${multiplicador}`)
    console.log(array)

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu()

}