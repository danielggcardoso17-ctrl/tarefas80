const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex46(rl, exibirMenu) {
    console.clear()
    console.log("======================================")
    console.log("------------OUTRO EXERCICIO-----------")
    console.log("======================================")

    let x = parseFloat(await pergunta(rl, "Digite a quantidade de números que você quer digitar: "))

    while (x > 20 || isNaN(x) || x <= 0) {
        x = parseFloat(await pergunta(rl, "A quantidade de números deve ser menor que 20: "))
    }

    let numeros = [];
    let valor;
    for (let i = 0; i < x; i++) {
        valor = parseFloat(await pergunta(rl, `Digite o valor ${i + 1}: `));
        numeros.push(valor);
    }

    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)

    let sum = 0
    for (let i = 0; i < numeros.length; i++) {
        sum = sum + numeros[i]
    }

    let media = sum / x

    let positivos = 0
    let negativos = 0
    for (let i = 0; i < numeros.length; i++) {
        //numero atual
        numeros[i]
        if (numeros[i] >= 0) {
            positivos++
        } else {
            negativos++
        }
    }

    console.log(`O maior é: ${maior}\nO menor é: ${menor}\nA soma é: ${sum}\nA média aritimética é: ${media}\nA porcentagem de valores positivos é: ${(positivos * 100) / x}%\nA porcentagem de valores negativos é: ${(negativos * 100) / x}%`)

    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}