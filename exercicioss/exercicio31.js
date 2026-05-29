function MediaDoAluno2(rl, exibirMenu) {
    console.clear();
    console.log("=========================================================================")
    console.log("----------DESCUBRA QUAL DEVE SER A SUA SEGUNDA NOTA PARA PASSAR----------")
    console.log("=========================================================================")
    rl.question("Digite sua primeira nota: ", (n1) => {

        const n2 = (15 - n1) / 2;

        if (isNaN(n1)) {
            console.log("Por favor, digite apenas números.");
            rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() })
        } else {
            console.log(`Sua segunda nota deve ser no mínimo ${n2} para você passar.`)
            rl.question("Pressione ENTER para voltar ao menu...", () => { exibirMenu() })
        }

    })
}
export default MediaDoAluno2;