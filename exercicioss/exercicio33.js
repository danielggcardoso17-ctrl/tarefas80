const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

async function ex33(rl, exibirMenu) {
    console.clear();
    console.log("=========================================")
    console.log("--------VALIDAÇÃO DE DOIS VALORES--------")
    console.log("=========================================")

    const primeiro = parseFloat(await pergunta(rl, "Digite o primeiro valor: "));
    let segundo;

    do {
        segundo = parseFloat(await pergunta(rl, "Digite o segundo valor (deve ser maior que o primeiro): "));
        if (segundo <= primeiro) console.log("Valor inválido! O segundo deve ser maior que o primeiro.");
    } while (segundo <= primeiro);

    console.log(`Valores aceitos: ${primeiro} e ${segundo}`);
    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}

export default ex33;