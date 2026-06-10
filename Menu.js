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
import areaRetangulo2 from './exercicioss/exercicio23.js';
import exibir from './exercicioss/exercicio24.js';
import pesoAltura from './exercicioss/exercicio25.js';
import triangulo from './exercicioss/exercicio26.js';
import trianguloRetangulo from './exercicioss/exercicio27.js';
import pesoAlturaSexo from './exercicioss/exercicio28.js';
import velocidadee from './exercicioss/exercicio29.js';
import MediaDoAluno from './exercicioss/exercicio30.js';
import MediaDoAluno2 from './exercicioss/exercicio31.js';
import apenasPositivo from './exercicioss/exercicio32.js';
import ex33 from './exercicioss/exercicio33.js';
import ex34 from './exercicioss/exercicio34.js';
import ex35 from './exercicioss/exercicio35.js';
import ex36 from './exercicioss/exercicio36.js';
import { ex37 } from './exercicioss/exercicio37.js';
import { ex38 } from './exercicioss/exercicio38.js';
import { ex39 } from './exercicioss/exercicio39.js';
import { ex40 } from './exercicioss/exercicio40.js';
import { ex41 } from './exercicioss/exercicio41.js';
import { ex42 } from './exercicioss/exercicio42.js';
import { ex43 } from './exercicioss/exercicio43.js';
import { ex44 } from './exercicioss/exercicio44.js';
import { ex45 } from './exercicioss/exercicio45.js';
import { ex46 } from './exercicioss/exercicio46.js';
import { ex47 } from './exercicioss/exercicio47.js';
import { ex48 } from './exercicioss/exercicio48.js';
import { ex49 } from './exercicioss/exercicio49.js';
import { ex50 } from './exercicioss/exercicio50.js';
import { ex51 } from './exercicioss/exercicio51.js';


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
  25: { nome: "dfgsdfgs", fn: pesoAltura },
  26: { nome: "VERIFICAR SE AS MEDIDAS FORMAM UM TRIÂNGULO", fn: triangulo },
  27: { nome: "VERIFICAR SE AS MEDIDAS FORMAM UM TRIÂNGULO RETÂNGULO", fn: trianguloRetangulo },
  28: { nome: "Exercício 28", fn: pesoAlturaSexo },
  29: { nome: "exercicio 29", fn: velocidadee },
  30: { nome: "exercicio 30", fn: MediaDoAluno },
  31: { nome: "exercício 31", fn: MediaDoAluno2 },
  32: { nome: "exercício 32", fn: apenasPositivo },
  33: { nome: "exercício 33", fn: ex33 },
  34: { nome: "exercício 34", fn: ex34 },
  35: { nome: "exercício 35", fn: ex35 },
  36: { nome: "exercicio 36", fn: ex36 },
  37: { nome: "exercicio 37", fn: ex37 },
  38: { nome: "exercicio 38", fn: ex38 },
  39: { nome: "exercicios 39", fn: ex39 },
  40: { nome: "exercicios 40", fn: ex40 },
  41: { nome: "exercicio 41", fn: ex41 },
  42: { nome: "exercicio 42", fn: ex42 },
  43: { nome: "exercicio 43", fn: ex43 },
  44: { nome: "exercicio 44", fn: ex44 },
  45: { nome: "exercicio 45", fn: ex45 },
  46: { nome: "exercicio 46", fn: ex46 },
  47: { nome: "exercicio 47", fn: ex47 },
  48: { nome: "exercicio 48", fn: ex48 },
  49: { nome: "exercicio 49", fn: ex49 },
  50: { nome: "exercicio 50", fn: ex50 },
  51: { nome: "exercicio 51", fn: ex51 },
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
  console.log("26. VERIFICAR SE AS MEDIDAS FORMAM UM TRIÂNGULO")
  console.log("27. VERIFICAR SE AS MEDIDAS FORMAM UM TRIÂNGULO RETÂNGULO")
  console.log("28. Exercício 28")
  console.log("29. Exercício 29")
  console.log("30. Exercício 30")
  console.log("31. Exercício 31")
  console.log("32. Exercício 32")
  console.log("33. Exercício 33")
  console.log("34. Exercicio 34")
  console.log("35. Exercicio 35")
  console.log("36. Exercício 36")
  console.log("37. Exercício 37")
  console.log("38. Exercício 38")
  console.log("39. Exercício 39")
  console.log("40. Exercício 40")
  console.log("41. Exercício 41")
  console.log("42. Exercício 42")
  console.log("43. Exercício 43")
  console.log("44. Exercício 44")
  console.log("45. Exercício 45")
  console.log("46. Exercício 46")
  console.log("47. Exercício 47")
  console.log("48. Exercício 48")
  console.log("49. Exercício 49")
  console.log("50. Exercício 50")
  console.log("51. Exercício 51")


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