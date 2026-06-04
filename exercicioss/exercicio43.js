const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex43(rl, exibirMenu) {
    console.clear();
    console.log("============================================================================");
    console.log("-----------EXIBIR OS 'N' PRIMEIROS NÚMEROS DA SEQUENCIA DE NOVO-------------");
    console.log("============================================================================");

    let N = parseFloat(await pergunta(rl, "Digite o valor de N: "));
    let arr = Array(N)
    arr[0] = 1

    while (isNaN(N) || N <= 0 || N >= 50) {
        console.log("Erro: N deve ser um número positivo e menor que 50.");
        N = parseFloat(await pergunta(rl, "Digite um valor válido para N: "));
    }

    for (let i = 1; i <= N; i++) {
        arr[i] = arr[i - 1] + 1
    }

    for (let valores of arr) {
        console.log((valores / (valores + 1)).toFixed(2))
    }

    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}