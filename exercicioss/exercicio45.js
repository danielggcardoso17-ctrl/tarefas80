const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex45(rl, exibirMenu) {
    console.clear();
    console.log("==================================================");
    console.log("-----------EXIBIR DADOS DE 10 VALORES-------------");
    console.log("==================================================");

    const x1 = parseFloat(await pergunta(rl, "Digite o primeiro valor: "))
    const x2 = parseFloat(await pergunta(rl, "Digite o segundo valor: "))
    const x3 = parseFloat(await pergunta(rl, "Digite o terceiro valor: "))
    const x4 = parseFloat(await pergunta(rl, "Digite o quarto valor: "))
    const x5 = parseFloat(await pergunta(rl, "Digite o quinto valor: "))
    const x6 = parseFloat(await pergunta(rl, "Digite o sexto valor: "))
    const x7 = parseFloat(await pergunta(rl, "Digite o sétimo valor: "))
    const x8 = parseFloat(await pergunta(rl, "Digite o oitavo valor: "))
    const x9 = parseFloat(await pergunta(rl, "Digite o nono valor: "))
    const x10 = parseFloat(await pergunta(rl, "Digite o décimo valor: "))

    while (isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(x4) || isNaN(x5) || isNaN(x6) || isNaN(x7) || isNaN(x8) || isNaN(x9) || isNaN(x10) || x1 > 20 || x2 > 20 || x3 > 20 || x4 > 20 || x5 > 20 || x6 > 20 || x7 > 20 || x8 > 20 || x9 > 20 || x10 > 20) {
        console.log("valores devem ser números válidos.");
        await pergunta(rl, "Pressione ENTER para voltar ao menu...");
        exibirMenu();
    }

    const valores = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10];
    let sum = 0
    for (let i = 0; i < valores.length; i++) {
        sum = sum + valores[i]
    }
    const Maior = Math.max(...valores)

    console.log("Valores digitados:");
    valores.forEach((valor, index) => {
        console.log(`Valor ${index + 1}: ${valor}`);
    });
    console.log(`O maior valor: ${Maior}\nA soma dos valores: ${sum}\nMédia dos valores: ${sum / 10} `)

    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}