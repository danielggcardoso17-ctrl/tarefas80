const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex51(rl, exibirMenu) {
    console.clear()
    console.log("=======================================")
    console.log("-----------TRIGONOMETRIA 2-------------")
    console.log("=======================================")

    console.log("1. Triângulo")
    console.log("2. Quadrado")
    console.log("3. Retângulo")
    console.log("4. Circulo")
    console.log("5. Fim do processo")
    let z = parseFloat(await pergunta(rl, "Selecione a opção que você deseja: "))

    switch (z) {
        case 1:
            console.log("Bem-vindo a calculadora da área do triangulo")
            let baset = parseFloat(await pergunta(rl, "Digite a Base do triângulo (em cm): "))
            let alturat = parseFloat(await pergunta(rl, "Digite a Altura do triângulo (em cm): "))
            if (isNaN(baset) || isNaN(alturat) || baset <= 0 || alturat <= 0) {
                console.log("os valores nao podem ser negativos.")
                await pergunta(rl, "Pressione ENTER para tentar novamente...")
                ex51(rl, exibirMenu);
            } else {
                let resultado = (baset * alturat) / 2;
                console.log(`A área do triangulo é: ${resultado}`)
            }
            break;
        case 2:
            console.log("Bem-vindo a calculadora da área do quadrado")
            let lado = parseFloat(await pergunta(rl, "Digite o lado do quadrado (em cm): "))
            if (isNaN(lado) || lado <= 0) {
                console.log("os valores nao podem ser negativos.")
                await pergunta(rl, "Pressione ENTER para tentar novamente...")
                ex51(rl, exibirMenu);
            } else {
                let resultado = Math.pow(lado, 2)
                console.log(`A área do quadrado é: ${resultado}`)
            }
            break;
        case 3:
            console.log("Bem-vindo a calculadora da área do retângulo")
            let base = parseFloat(await pergunta(rl, "Digite a Base (em cm): "))
            let altura = parseFloat(await pergunta(rl, "Digite a Altura (em cm): "))
            if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                console.log("os valores nao podem ser negativos.")
                await pergunta(rl, "Pressione ENTER para tentar novamente...")
                ex51(rl, exibirMenu);
            } else {
                let resultado = base * altura;
                console.log(`A área do retângulo é: ${resultado}`)
            }
            break;
        case 4:
            console.log("Bem-vindo a calculadora da área do círculo")
            let raio = parseFloat(await pergunta(rl, "Digite o Raio do círculo (em cm): "))
            if (isNaN(raio) || raio <= 0) {
                console.log("valor inválido.")
                await pergunta(rl, "Pressione ENTER para tentar novamente...")
                ex51(rl, exibirMenu);
            } else {
                let resultado = Math.pow(Math.PI * raio, 2);
                console.log(`A área do circulo é: ${resultado.toFixed(2)}`)
            }
            break;
        default:
            exibirMenu()

    }

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu();
}

