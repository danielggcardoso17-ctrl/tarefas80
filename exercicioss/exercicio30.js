function MediaDoAluno(rl, exibirMenu) {
    console.clear();
    console.log("====================================")
    console.log("----------EXIBIR SUA MÉDIA----------")
    console.log("====================================")
    rl.question("Digite sua primeira nota: ", (n1) => {
        rl.question("Digite sua segunda nota: ", (n2) => {
            const media = (parseFloat(n1) + 2 * parseFloat(n2)) / 3;

            if (isNaN(n1) || isNaN(n2)) {
                console.log("Por favor, digite apenas números.");
                rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() })
            } else if (media < 5) {
                console.log(`Sua média é: ${media.toFixed(2)}`);
                console.log("Reprovado");
                rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() });
            } else if (media >= 5) {
                console.log(`Sua média é: ${media.toFixed(2)}`);
                console.log("Aprovado");
                rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() });
            }
        })
    })
}
export default MediaDoAluno;