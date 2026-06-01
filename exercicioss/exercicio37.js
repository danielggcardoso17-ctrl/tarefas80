const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex37(rl, exibirMenu) {
    console.clear();
    console.log("====================================================================")
    console.log("-----------TABUADA TAMBÉM SO QUE UM POUCO DIFERENTE KKK-------------")
    console.log("====================================================================")

    const X = parseFloat(await pergunta(rl, "Digite um número: "))
    const A = parseFloat(await pergunta(rl, "Digite o valor inicial do intervalo: "))
    let B;

    do {
        B = parseFloat(await pergunta(rl, "Digite o valor final do intervalo (deve ser maior que o valor inicial): "));
    } while (A >= B);

    if (isNaN(X) || isNaN(A) || isNaN(B)) {
        console.log("valores inválidos");
        await pergunta(rl, "Pressione ENTER para voltar ao menu...")
        exibirMenu();

    } else {
        for (B; B >= A; B--) {
            console.log(`${X} x ${B} = ${X * B}`)
        }
    }

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu();


}