function triangulo(rl, exibirMenu) {
    console.clear()
    console.log("===============================================================")
    console.log("----------VERIFICAR SE AS MEDIDAS FORMAM UM TRIÂNGULO----------")
    console.log("===============================================================")
    rl.question("Digite o primeiro lado: ", (l1) => {
        rl.question("Digite o segundo lado: ", (l2) => {
            rl.question("Digite o terceiro lado: ", (l3) => {
                const lado1 = parseFloat(l1)
                const lado2 = parseFloat(l2)
                const lado3 = parseFloat(l3)

                if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
                    console.log("Por favor, digite valores numéricos válidos.")
                } else if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
                    console.log("As medidas formam um triângulo.")
                } else {
                    console.log("As medidas não formam um triângulo.")
                }
                rl.question("Pressione Enter para ver o tipo do triângulo...", () => {
                    if (lado1 === lado2 && lado2 === lado3) {
                        console.log("As medidas formam um triângulo equilátero.")
                    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
                        console.log("As medidas formam um triângulo isósceles.")
                    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
                        console.log("As medidas formam um triângulo escaleno.")
                    }
                    rl.question("Pressione Enter para voltar ao menu...", () => {
                        exibirMenu()
                    })
                })
            })
        })
    })
}

export default triangulo;