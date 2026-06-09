const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex44(rl, exibirMenu) {
    console.clear();
    console.log("====================================================================");
    console.log("-----------EXIBIR OS 'N' PRIMEIROS NÚMEROS DA SEQUENCIA-------------");
    console.log("====================================================================");

    let N = parseFloat(await pergunta(rl, "Digite o valor de N: "));
    let arr = Array(N)
    arr[0] = 2
    arr[1] = 5

    while (isNaN(N) || N <= 0 || N >= 50) {
        console.log("Erro: N deve ser um número positivo e menor que 50.");
        N = parseFloat(await pergunta(rl, "Digite um valor válido para N: "));
    }

    for (let i = 2; i <= N; i++) {
        let numerador = i * i + 1
        let denominador = Math.pow(i, 3)
        console.log(`${numerador} / ${denominador}`)
    }

    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}