function produtos(rl, exibirMenu) {
    console.clear();
    console.log("===================================================================")
    console.log("----------CALCULAR O TROCO DO PAGAMENTO DE CINCO PRODUTOS----------")
    console.log("===================================================================")
    rl.question("Valor do primeiro produto: ", (p1) => {
        rl.question("Valor do segundo produto: ", (p2) => {
            rl.question("Valor do terceiro produto: ", (p3) => {
                rl.question("Valor do quarto produto: ", (p4) => {
                    rl.question("Valor do quinto produto: ", (p5) => {
                        if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(p4) || isNaN(p5)) {
                            console.log("Valor inválido...")
                            rl.question("Pressione ENTER para voltar ao menu...", () => {
                                exibirMenu();
                            })
                        } else {
                            let total = parseFloat(p1) + parseFloat(p2) + parseFloat(p3) + parseFloat(p4) + parseFloat(p5)
                            rl.question("Valor pago: ", (pago) => {
                                if (isNaN(pago)) {
                                    console.log("Valor inválido...")
                                    rl.question("Pressione ENTER para voltar ao menu...", () => {
                                        exibirMenu();
                                    })
                                } else {
                                    let troco = parseFloat(pago) - total
                                    console.log("O valor do troco é: " + troco.toFixed(2))
                                }
                                rl.question("Pressione ENTER para voltar ao menu...", () => {
                                    exibirMenu();
                                })
                            })
                        }
                    })
                })
            })
        })
    })

}

export default produtos;