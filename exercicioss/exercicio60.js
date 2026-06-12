const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex60(rl, exibirMenu) {
    console.clear()
    console.log("===================================================================================")
    console.log("-----------ARMAZENAR E EXIBIR O NOME, A IDADE, E O SEXO DE 100 PESSOAS-------------")
    console.log("===================================================================================")

    const listaDePessoas = []
    const totalDePessoas = 3
    const maioresDe20 = []

    for (let i = 1; i <= totalDePessoas; i++) {
        console.log(`Cadastro #${i}`);

        let nome = await pergunta(rl, "Digite o nome: ");
        let idadeInput = await pergunta(rl, "Digite a idade: ");
        let sexo = await pergunta(rl, "Digite o sexo(M ou F): ");
        let idade = parseInt(idadeInput, 10);

        if (idade >= 20) {
            maioresDe20.push({ nome: nome, idade: idade, sexo: sexo })
        }
        else {
            listaDePessoas.push({ nome: nome, idade: idade, sexo: sexo })
        }
    }

    console.log("USERS MAIORES DE 20")
    console.table(maioresDe20)
    console.log("TODOS OS USERS")
    console.table(listaDePessoas)
}