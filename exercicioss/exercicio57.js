const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex57(rl, exibirMenu) {
    console.clear()
    console.log("==========================================================================")
    console.log("-----------ARMAZENAR E EXIBIR O NOME E A IDADE DE 100 PESSOAS-------------")
    console.log("==========================================================================")

    const listaDePessoas = []
    const totalDePessoas = 2

    for (let i = 1; i <= totalDePessoas; i++) {
        console.log(`Cadastro #${i}`);

        let nome = await pergunta(rl, 'Digite o nome: ');
        let idadeInput = await pergunta(rl, 'Digite a idade: ');
        let idade = parseInt(idadeInput, 10);

        listaDePessoas.push({ nome: nome, idade: idade });
    }

    console.table(listaDePessoas)

    await pergunta(rl, "Pressione ENTER para voltar ao menu...")
    exibirMenu()

}