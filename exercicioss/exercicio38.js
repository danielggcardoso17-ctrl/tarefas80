const pergunta = (rl, texto) => new Promise((resolve) => rl.question(texto, resolve));

export async function ex38(rl, exibirMenu) {
    console.clear();
    console.log("======================================")
    console.log("-----------TABUADA TAMBÉM-------------")
    console.log("======================================")

    for (let i = 1; i <= 10; i++) {
        console.log(`1 x ${i} = ${1 * i}`)
    }

    await pergunta(rl, "Pressione ENTER para ver a prôxima tabuada...")
    for (let i = 1; i <= 10; i++) {
        console.log(`2 x ${i} = ${2 * i}`)
    }

    await pergunta(rl, "Pressione ENTER para ver a prôxima tabuada...")
    for (let i = 1; i <= 10; i++) {
        console.log(`3 x ${i} = ${3 * i}`)
    }

}