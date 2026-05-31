const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

async function ex34(rl, exibirMenu) {
    console.clear();
    console.log("=========================================")
    console.log("-----------VALIDAÇÃO DE SEXO-------------")
    console.log("=========================================")

    let sexo;

    do {
        sexo = (await pergunta(rl, "Digite seu sexo (F ou M): ")).toUpperCase().trim();
        if (sexo !== "F" && sexo !== "M") console.log("Entrada inválida! Digite apenas F ou M.");
    } while (sexo !== "F" && sexo !== "M");

    console.log(`Sexo registrado: ${sexo}`);
    await pergunta(rl, "Pressione ENTER para voltar ao menu...");
    exibirMenu();
}

export default ex34;