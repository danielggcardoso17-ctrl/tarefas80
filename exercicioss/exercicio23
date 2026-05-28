function areaRetangulo2(rl, exibirMenu) {
    console.clear();
    console.log("===========================================================================")
    console.log("--------BEM VINDO A MAIS UMA OUTRA CALCULADORA DE ÁREA DO RETÂNGULO--------")
    console.log("===========================================================================")
    rl.question('Digite o tamanho da base (em centimetros): ', (answer) => {
        rl.question('Digite o tamanho da altura (em centimetros): ', (answer2) => {
            let resultado = answer * answer2
            if (isNaN(answer) || isNaN(answer2)) {
                console.log("Digite apenas numeros válidos...");
                return rl.question("Pressione ENTER para voltar...", () => {
                    exibirMenu()
                });
            } else if (resultado > 100) {
                console.log(`A área desse retângulo é: ${resultado}`)
                console.log("Terreno Grande")
            } else if (resultado < 100) {
                console.log(`A área desse retângulo é: ${resultado}`)
                console.log("Terreno pequeno")
            }
            rl.question('\nPressione ENTER para voltar ao menu...', () => {
                exibirMenu()
            });
        });
    });
}

export default areaRetangulo2;