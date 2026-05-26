function areaDoQuadrado (rl, exibirMenu) {
    console.clear();
    console.log("============================================================")
    console.log("--------BEM VINDO A CALCULADORA DA ÁREA DO QUADRADO-------")
    console.log("============================================================")
    rl.question("Digite a aresta do quadrado: ", (aresta) => {
         if(isNaN(aresta)){
            console.log("Digite apenas numeros válidos...");
            return rl.question("Pressione ENTER para voltar...", () => {
                exibirMenu()
            });
        } else {
            let resultado = Math.pow(aresta, 2);
            console.log("A área do quadrado é: " + resultado.toFixed(2));
        }
        rl.question('\nPressione ENTER para voltar ao menu...', () => {
                exibirMenu()
            });
    })

}

export default areaDoQuadrado;