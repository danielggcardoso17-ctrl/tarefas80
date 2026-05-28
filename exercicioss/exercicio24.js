function exibir(rl, exibirMenu) {
    console.clear();
    console.log("===============================================")
    console.log("----------MAIOR VALOR ENTRE 3 NÚMEROS----------")
    console.log("===============================================")
    rl.question("Digite o primeiro valor: ", (v1) => {
        rl.question("Digite o segundo valor: ", (v2) => {
            rl.question("Digite o segundo valor: ", (v3) => {
                if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
                    console.log("Valor inválido...")
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                } else if (Number(v1) > Number(v2) && Number(v1) > Number(v3)) {
                    console.log(`${v1} é maior que ${v2} e ${v3}`)
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                } else if (Number(v1) > Number(v2) && Number(v1) == Number(v3)) {
                    console.log(`${v1} é maior que ${v2} e igual a ${v3}`)
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                } else if (Number(v2) > Number(v1) && Number(v2) > Number(v3)) {
                    console.log(`${v2} é maior que ${v1} e ${v3}`)
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                } else if (Number(v2) > Number(v1) && Number(v2) == Number(v3)) {
                    console.log(`${v2} é maior que ${v1} e igual a ${v3}`)
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                } else if (Number(v3) > Number(v2) && Number(v3) > Number(v2)) {
                    console.log(`${v3} é maior que ${v2} e ${v1}`)
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                } else if (Number(v1) > Number(v3) && Number(v1) == Number(v2)) {
                    console.log(`${v1} é maior que ${v3} e igual a ${v2}`);
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                } else {
                    console.log("Os números são iguais")
                    rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
                }
            })
        })
    })
}

export default exibir;