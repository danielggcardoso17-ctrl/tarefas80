export function ex42(rl, exibirMenu) {
    console.clear();
    console.log("====================================================================")
    console.log("-----------EXIBIR OS 'N' PRIMEIROS NÚMEROS DA SEQUENCIA-------------")
    console.log("====================================================================")

    let arra = Array(99)
    arra[0] = 2
    arra[1] = 5
    arra[2] = 10
    arra[3] = 17
    let sum = 0

    rl.question("Digite o valor de N para somar os N primeiros números: ", (n) => {
        n = parseFloat(n);

        if (n > 100 || n <= 0 || isNaN(n)) {
            console.log("Valor inválido")
            rl.question("Pressione ENTER para voltar ao menu...", () => {
                exibirMenu();
            })
        }

        for (let i = 4; i <= n - 1; i++) {
            arra[i] = arra[i - 1] + arra[i - 1] - arra[i - 2] + 2
        }

        for (let i = 0; i <= n - 1; i++) {
            console.log(arra[i])
        }

        arra.forEach(num => {
            sum += num
        });

        console.log("A soma é: " + sum)

        rl.question("Pressione ENTER para voltar ao menu...", () => {
            exibirMenu();
        })
    })

}