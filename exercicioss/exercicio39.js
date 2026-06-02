export async function ex39(rl, exibirMenu) {
    console.clear();
    console.log("===============================================================================")
    console.log("-----------EXIBIR A SOMA DOS NÚMEROS INTEIROS POSITIVOS DE 1 A 100-------------")
    console.log("===============================================================================")

    let soma = 0

    for (let i = 1; i <= 100; i++) {
        soma = soma + i
    }
    console.log(soma)

    rl.question("Pressione ENTER para ver a prôxima tabuada...", () => {
        exibirMenu();
    })
}