export function ex49() {
    const totalNumeros = 60;
    let jogosExibidos = 0;
    const limiteExibicao = 100;

    for (let n1 = 1; n1 <= totalNumeros - 5; n1++) {
        for (let n2 = n1 + 1; n2 <= totalNumeros - 4; n2++) {
            for (let n3 = n2 + 1; n3 <= totalNumeros - 3; n3++) {
                for (let n4 = n3 + 1; n4 <= totalNumeros - 2; n4++) {
                    for (let n5 = n4 + 1; n5 <= totalNumeros - 1; n5++) {
                        for (let n6 = n5 + 1; n6 <= totalNumeros; n6++) {

                            if (jogosExibidos < limiteExibicao) {
                                console.log(`Jogos: [${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}]`);
                                jogosExibidos++;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log("--------------------------------------------------");
    console.log(`Exibição limitada às primeiras ${limiteExibicao} combinações.`);
    console.log("--------------------------------------------------");
}

// Executa a função
ex49();

