async function ex35(rl, exibirMenu) {
    console.clear();
    console.log("=========================================")
    console.log("------------TABUADA DO 5-----------------")
    console.log("=========================================")

    for (let i = 1; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }

    const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));
    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}

export default ex35;