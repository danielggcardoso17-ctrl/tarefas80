const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex57(rl, exibirMenu) {
    console.clear()
    console.log("==========================================================================")
    console.log("-----------ARMAZENAR E EXIBIR O NOME E A IDADE DE 100 PESSOAS-------------")
    console.log("==========================================================================")


    let nomes = []
    let idade = []
    let n;
    let age;

    for (let i = 0; i < 2; i++) {
        n = await pergunta(rl, `Digite o nome da ${i + 1}o pessoa: `)
        age = parseFloat(await pergunta(rl, `Digite a idade da ${i + 1}o pessoa: `))
    }

    if (typeof n != "string" || age < 0 || isNaN(age)) {
        await pergunta(rl, `Valor inválido pressione ENTER para tentar novamente...`)
        ex57(rl, exibirMenu)
    } else {
        nomes.push(n)
        idade.push(age)
    }

}