export function ex41(rl, exibirMenu) {
    console.clear();
    console.log("===============================================================================")
    console.log("-----------EXIBIR OS 20 PRIMEIROS VALORES DA SEQUENCIA BERGAMASCHI-------------")
    console.log("===============================================================================")

    let Bergamaschi = Array(20)
    Bergamaschi[0] = 1
    Bergamaschi[1] = 1
    Bergamaschi[2] = 1

    for (let i = 3; i <= 19; i++) {
        Bergamaschi[i] = Bergamaschi[i - 1] + Bergamaschi[i - 2] + Bergamaschi[i - 3]
    }

    for (let valor of Bergamaschi) {
        console.log(valor)
    }

    rl.question("Pressione ENTER para voltar ao menu...", () => {
        exibirMenu();
    })
}

