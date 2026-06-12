const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex59(rl, exibirMenu) {
    console.clear()
    console.log("===================================================================================")
    console.log("-----------ARMAZENAR E EXIBIR O NOME, A IDADE, E O SEXO DE 100 PESSOAS-------------")
    console.log("===================================================================================")

    const listaDePessoas = []
    const totalDePessoas = 100
    const maioresDe18 = []

    for (let i = 1; i <= totalDePessoas; i++) {
        console.log(`Cadastro #${i}`);

        let nome = await pergunta(rl, "Digite o nome: ");
        let idadeInput = await pergunta(rl, "Digite a idade: ");
        let sexo = await pergunta(rl, "Digite o sexo(M ou F): ");
        let idade = parseInt(idadeInput, 10);
        listaDePessoas.push({ nome: nome, idade: idade, sexo: sexo });

        if (idade >= 18) {
            maioresDe18.push({ nome: nome, idade: idade, sexo: sexo })
        }
    }

    console.table(maioresDe18);

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu()

}