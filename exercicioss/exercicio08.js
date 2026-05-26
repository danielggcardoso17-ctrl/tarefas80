function milhasMaEmMetros(rl, exibirMenu) {
    console.clear();
    console.log("=========================================================================");
    console.log("--------BEM VINDO AO CONVERSOR DE MILHAS MARÍTIMAS PARA QUILÔMETROS------");
    console.log("=========================================================================");
    rl.question("Digite o valor para converter: ", (milha) => {
        if (isNaN(milha)) {
            console.log("Digite um valor válido...")
            rl.question("pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        } else {
            let resultado = milha * 1.852
            console.log("O resultado em KM é: " + resultado.toFixed(2) + " Km")
        }
        rl.question("pressione ENTER para voltar ao menu...", () => {
            exibirMenu();
        })
    })
}

export default milhasMaEmMetros;