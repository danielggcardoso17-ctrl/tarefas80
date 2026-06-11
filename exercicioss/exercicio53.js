const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex53(rl, exibirMenu) {
    console.clear()
    console.log("============================================")
    console.log("-----------EXIBIR O MAIOR VALOR-------------")
    console.log("============================================")

    let arr = []
    let valor;

    for (let i = 0; i < 10; i++) {
        valor = parseFloat(await pergunta(rl, `Digite o ${i + 1}o número: `))
        if (isNaN(valor)) {
            await pergunta(rl, `Valor inválido, pressione ENTER para tentar novamente...`)
            ex53(rl, exibirMenu)
        } else {
            arr.push(valor)
        }
    }

    console.log(`O maior valor é: ${Math.max(...arr)}`)

}