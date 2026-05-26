function VolEsfera(rl, exibirMenu) {
    console.clear();
    console.log("==============================================================================");
    console.log("--------BEM VINDO A CALCULADORA DO VOLUME DE UMA ESFERA------");
    console.log("==============================================================================");
    rl.question("Digite o diâmentro da esfera (em centímetros): ", (diametro) => {
        if (isNaN(diametro)) {
            console.log("Valor inválido...")
            rl.question("Pressione ENTER para voltar ao menu...", () => {
            })
        } else {
            let resultado = (Math.pow(diametro, 3) * Math.PI) / 6
            console.log("O volume dessa esfera é: " + resultado.toFixed(2) + " cm³")
        }

        rl.question("\nPressione ENTER para voltar ao menu...", () => {
            exibirMenu();
        });
    })
}

export default VolEsfera;