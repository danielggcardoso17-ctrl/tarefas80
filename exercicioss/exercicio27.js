function trianguloRetangulo(rl, exibirMenu) {
    console.clear()
    console.log("=========================================================================")
    console.log("----------VERIFICAR SE AS MEDIDAS FORMAM UM TRIÂNGULO RETÂNGULO----------")
    console.log("=========================================================================")
    rl.question("Digite a medida do primeiro lado: ", (lado1) => {
        rl.question("Digite a medida do segundo lado: ", (lado2) => {
            rl.question("Digite a medida do terceiro lado: ", (lado3) => {
                const numeros = [parseFloat(lado1), parseFloat(lado2), parseFloat(lado3)]
                const [cateto1, cateto2, hipotenusa] = numeros.sort((a, b) => a - b)

                if (isNaN(lado1 || lado2 || lado3)) {
                    console.log("Digite apenas valores válidos...")
                } else if (Math.pow(hipotenusa, 2) === Math.pow(cateto1, 2) + Math.pow(cateto2, 2)) {
                    console.log("Isso é um triângulo retângulo...")
                } else {
                    console.log("isso não é um triângulo retângulo...")
                }
                rl.question("Pressione ENTER para voltar ao menu", () => { exibirMenu() })
            });
        });
    });
}

export default trianguloRetangulo;