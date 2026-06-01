const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

async function ex34(rl, exibirMenu) {
    console.clear();
    console.log("===========================================")
    console.log("-----------VALIDAÇÃO DE GÊNERO-------------")
    console.log("===========================================")

    let genero;

    do {
        genero = (await pergunta(rl, "Digite seu gênero (F ou M): ")).toUpperCase().trim();
        if (genero !== "F" && genero !== "M") console.log("Entrada inválida! Digite apenas F ou M.");
    } while (genero !== "F" && genero !== "M");

    console.log(`Gênero registrado: ${genero}`);
    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}

export default ex34;