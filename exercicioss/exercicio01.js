function areaRetangulo(rl, exibirMenu) {    
    console.clear();
    console.log("============================================================")
    console.log("--------BEM VINDO A CALCULADORA DE ÁREA DO RETÂNGULO--------")
    console.log("============================================================")
    rl.question('Digite o tamanho da base (em centimetros): ', (answer) => {
        rl.question('Digite o tamanho da altura (em centimetros): ', (answer2) => {


        if(isNaN(answer) || isNaN(answer2))
        {
            console.log("Digite apenas numeros válidos...");
            return rl.question("Pressione ENTER para voltar...", () => {
                exibirMenu()
            });
        }

            let resultado = Number(answer) * Number(answer2);
            console.log("\nO resultado da área é: " + resultado.toFixed(2) + " cm²");

            rl.question('\nPressione ENTER para voltar ao menu...', () => {
                exibirMenu()
            });
        });
    });
}

export default areaRetangulo;
