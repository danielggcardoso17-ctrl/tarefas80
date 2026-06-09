const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex48(rl, exibirMenu) {
    console.clear()

    let x = parseFloat(await pergunta(rl, "Digite um número para ver seu fatorial: "))

    while (x < 0 || isNaN(x)) {
        console.log("valor inválido...")
        x = parseFloat(await pergunta(rl, "Digite um número válido: "))
    }

    let fatorial = 1;
    for (let i = 1; i <= x; i++) {
        fatorial *= i;
    }

    console.log(`${x}! é ${fatorial}`)

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu();

}