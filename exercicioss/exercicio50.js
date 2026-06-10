const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex50(rl, exibirMenu) {
    console.clear()
    console.log("=================================")
    console.log("-----------OPERAÇÕES-------------")
    console.log("=================================")

    let x = parseFloat(await pergunta(rl, "Digite o primeiro valor: "))
    let y = parseFloat(await pergunta(rl, "Digite o segundo valor: "))

    if (isNaN(x) || isNaN(y)) {
        console.log("valores inválidos...")
        await pergunta(rl, "Pressione ENTER para tentar novamente...")
        ex50(rl, exibirMenu);
    } else {

        console.log("1. Multiplicação")
        console.log("2. Adição")
        console.log("3. Divisão")
        console.log("4. Subtração")
        console.log("5. Fim do processo")
        let z = parseFloat(await pergunta(rl, "Digite o numero referente a operação que voce deseja realizar: "))

        switch (z) {
            case 1:
                console.log(`${x} x ${y}: ${x * y}`)
                break;
            case 2:
                console.log(`${x} + ${y}: ${x + y}`)
                break;
            case 3:
                if (!(y != 0)) {
                    console.log("O denominador é zero.")
                    await pergunta(rl, "Pressione ENTER para tentar novamente...")
                    ex50(rl, exibirMenu);
                } else {
                    let resultado = x / y
                    console.log(`${x} / ${y}: ${resultado}`)
                }
                break;
            case 4:
                console.log(`${x} - ${y}: ${x - y}`)
                break;
            default:
                await pergunta(rl, "Pressione ENTER para voltar ao menu...")
                exibirMenu();
                break;
        }
        await pergunta(rl, "Pressione ENTER para voltar ao menu...")
        exibirMenu()


    }
}