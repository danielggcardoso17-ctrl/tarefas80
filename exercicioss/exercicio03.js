function diagonalQuadrado(rl, exibirMenu) {
    console.clear();
    console.log("============================================================");
    console.log("--------BEM VINDO A CALCULADORA DA ÁREA DO QUADRADO ATRAVÉS DA DIAGONAL-------");
    console.log("============================================================");
    rl.question("Digite o valor da diagonal do quadrado (em cm): ", (diagonal) => {
        if (isNaN(diagonal)) {
            console.log("Você não digitou um valor válido...")
            rl.question("Pressione ENTER para voltar...", () => {
                exibirMenu();
            })
        } else {
            let resultado = Math.pow(diagonal, 2) / 2
            console.log("O resultado da área desse quadrado atraves de sua diagonal é: " + resultado.toFixed(2) + " cm²");
            console.log("===============================");
        }

        rl.question("Pressione ENTER para voltar...", () => {
            exibirMenu();
        })
    });
};

export default diagonalQuadrado;