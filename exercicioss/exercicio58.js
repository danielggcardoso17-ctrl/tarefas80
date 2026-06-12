const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex58(rl, exibirMenu) {
    console.clear()
    console.log("===================================================================================")
    console.log("-----------ARMAZENAR E EXIBIR O NOME, A IDADE, E O SEXO DE 100 PESSOAS-------------")
    console.log("===================================================================================")

    const listaDePessoas = []
    const totalDePessoas = 100
    const onlyFemale = []

    for (let i = 1; i <= totalDePessoas; i++) {
        console.log(`Cadastro #${i}`);

        let nome = await pergunta(rl, "Digite o nome: ");
        let idadeInput = await pergunta(rl, "Digite a idade: ");
        let sexo = await pergunta(rl, "Digite o sexo(M ou F): ");
        let idade = parseInt(idadeInput, 10);
        listaDePessoas.push({ nome: nome, idade: idade, sexo: sexo });

        if (sexo === "F" || sexo === "f") {
            onlyFemale.push({ nome: nome, idade: idade, sexo: sexo })
        } else if (sexo === "M" || sexo === "m") {
            listaDePessoas.push({ nome: nome, idade: idade, sexo: sexo })
        }
    }

    console.table(onlyFemale)

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu()
}