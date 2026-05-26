function areaTriangulo(rl, exibirMenu) {
    console.clear();
    console.log("==============================================================================");
    console.log("--------BEM VINDO A CALCULADORA DA ÁREA DO TRIÂNGULO-------");
    console.log("==============================================================================");
    rl.question("Digite a Base do triângulo (em centímetros): ", (base) => {
        rl.question("Digite a Altura do triângulo (em centímetros): ", (altura) => {
            if (isNaN(base)) {
                console.log("Valor inválido...");
                rl.question("Pressione ENTER para voltar...", () => {
                    exibirMenu();
                });
            } else {
                let resultado = (base * altura) / 2
                console.log("O resultado da área desse quadrado é: " + resultado.toFixed(2) + " cm²");
            }
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            });
        })
    })
}

export default areaTriangulo;