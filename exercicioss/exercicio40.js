export function ex40() {
    console.clear();
    console.log("=============================================================================")
    console.log("-----------EXIBIR OS 30 PRIMEIROS VALORES DA SEQUENCIA FIBONACCI-------------")
    console.log("=============================================================================")

    let fibonacci2 = Array(30)
    fibonacci2[0] = 0
    fibonacci2[1] = 1

    for (let i = 2; i <= 29; i++) {

        fibonacci2[i] = fibonacci2[i - 1] + fibonacci2[i - 2]
    }

    for (let valor of fibonacci2) {
        console.log(valor)
    }

    rl.question("Pressione ENTER para voltar ao menu...", () => {
        exibirMenu();
    })
}