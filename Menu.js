import readline from 'readline';
import areaRetangulo from './exercicioss/exercicio01.js';
import areaDoQuadrado from './exercicioss/exercicio02.js';
import diagonalQuadrado from './exercicioss/exercicio03.js';
import areaTriangulo from './exercicioss/exercicio04.js';
import VolEsfera from './exercicioss/exercicio05.js';
import mediaAritimetica from './exercicioss/exercicio06.js';
import mediaGeometrica from './exercicioss/exercicio07.js';
import milhasMaEmMetros from './exercicioss/exercicio08.js';
import tensaoCircuito from './exercicioss/exercicio09.js';
import celsiusToFahren from './exercicioss/exercicio10.js';
import areaCirculo from './exercicioss/exercicio11.js';
import VolCone from './exercicioss/exercicio12.js';
import velocidade from './exercicioss/exercicio13.js';
import espacoLivre from './exercicioss/exercicio14.js';
import converterDolar from './exercicioss/exercicio15.js';
import trigonometria from './exercicioss/exercico16.js';
import potenciacao from './exercicioss/exercico17.js';
import produtos from './exercicioss/exercicio18.js';
import exibirMaiorValor from './exercicioss/exercicio19.js';
import exibirMenorValor from './exercicioss/exercicio20.js';
import exibirIgual from './exercicioss/exercicio21.js';
import areaRetangulo100 from './exercicioss/exercicio22.js';
import areaRetangulo2 from './exercicioss/exercicio23';
import exibir from './exercicioss/exercicio24.js';
import pesoAltura from './exercicio25.js';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exercicios = {
  1: { nome: "Área do Retângulo", fn: areaRetangulo },
  2: { nome: "Área do Quadrado apartir de sua aresta", fn: areaDoQuadrado },
  3: { nome: "Área do Quadrado apartir da sua diagonal", fn: diagonalQuadrado },
  4: { nome: "Área do Triângulo", fn: areaTriangulo },
  5: { nome: "Volume da esfera apartir de seu diâmetro", fn: VolEsfera },
  6: { nome: "Média aritimetica de 4 valores", fn: mediaAritimetica },
  7: { nome: "Média geométrica", fn: mediaGeometrica },
  8: { nome: "Conversor de milhas marítimas para quilômetros", fn: milhasMaEmMetros },
  9: { nome: "Calculadora de Tensão elétrica", fn: tensaoCircuito },
  10: { nome: "Conversor de Celsius para Fahrenheint", fn: celsiusToFahren },
  11: { nome: "Área do circulo", fn: areaCirculo },
  12: { nome: "Volume do cone", fn: VolCone },
  13: { nome: "Velocidade final", fn: velocidade },
  14: { nome: "Espaço Livre", fn: espacoLivre },
  15: { nome: "Converter Dólar para Real", fn: converterDolar },
  16: { nome: "Seno, Cosseno e Tangente de um Ângulo", fn: trigonometria },
  17: { nome: "Potenciação", fn: potenciacao },
  18: { nome: "Calcular troco de 5 produtos", fn: produtos },
  19: { nome: "Qual é o maior número", fn: exibirMaiorValor },
  20: { nome: "Qual é o menor número", fn: exibirMenorValor },
  21: { nome: "VERIFICAR SE OS NÚMEROS SÃO IGUAIS OU MAIOR QUE O OUTRO", fn: exibirIgual },
  22: { nome: "A OUTRA CALCULADORA DE ÁREA DO RETÂNGULO", fn: areaRetangulo100 },
  23: { nome: "MAIS UMA OUTRA CALCULADORA DE ÁREA DO RETÂNGULO", fn: areaRetangulo2 },
  24: { nome: "asdffd", fn: exibir },
  25: { nome: "dfgsdfgs", fn: pesoAltura }
}

function exibirMenu() {
  console.clear()
  console.log("==========================================")
  console.log("             MENU INTERATIVO")
  console.log("==========================================")


  console.log("1. Área do Retângulo")
  console.log("2. Área do Quadrado apartir de sua aresta")
  console.log("3. Área do Quadrado apartir da sua diagonal")
  console.log("4. Área do Triângulo apartir da base e sua altura")
  console.log("5. Volume da esfera apartir de seu diâmetro")
  console.log("6. Média aritimetica de 4 valores")
  console.log("7. Média geométrica")
  console.log("8. Conversor de milhas marítimas para quilômetros")
  console.log("9. Calculadora de Tensão elétrica")
  console.log("10. Conversor de Celsius para Fahrenheint")
  console.log("11. Área do circulo")
  console.log("12. Volume do cone")
  console.log("13. Velocidade final")
  console.log("14. Espaço Livre")
  console.log("15. Converter Dólar para Real")
  console.log("16. Seno, Cosseno e Tangente de um Ângulo")
  console.log("17. Potenciação")
  console.log("18. Calcular troco de 5 produtos")
  console.log("19. Qual é o maior número")
  console.log("20. Qual é o menor número")
  console.log("21. VERIFICAR SE OS NÚMEROS SÃO IGUAIS OU MAIOR QUE O OUTRO")
  console.log("22. OUTRA CALCULADORA DE ÁREA DO RETÂNGULO")
  console.log("23. MAIS UMA OUTRA CALCULADORA DE ÁREA DO RETÂNGULO")
  console.log("24. qual o MAIOR VALOR ENTRE 3 NÚMEROS")
  console.log("25. analisar seu peso")

  rl.question("Escolha uma opção (1-80): ", (opcao) => {
    const suaEscolha = opcao.trim()

    if (exercicios[suaEscolha]) {
      console.clear();
      console.log(`\n-> Redirecionando para exercício ${exercicios[suaEscolha].nome}...`);
      exercicios[suaEscolha].fn(rl, exibirMenu);
    } else {
      console.log("opção inválida, tente novamente...")
      rl.question("Pressione ENTER para voltar ao menu...", () => {
        exibirMenu();
      })
    }
  })
}

exibirMenu();