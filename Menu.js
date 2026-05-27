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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

  rl.question('Escolha uma opção (1-80): ', (opcao) => {
    switch (opcao.trim()) {
      case '1':
        console.clear();
        console.log('\n-> Redirecionando para exercício Área do Retângulo...');
        areaRetangulo(rl, exibirMenu);
        break;
      case '2':
        console.log('\n-> Redirecionando para exercício Área do Quadrado...');
        areaDoQuadrado(rl, exibirMenu);
        break;
      case '3':
        console.log('\n-> Redirecionando para exercício Área do Quadrado através da sua diagonal...');
        diagonalQuadrado(rl, exibirMenu);
        break;
      case '4':
        console.log('\n-> Redirecionando para exercício Área do Triângulo através da base e altura...');
        areaTriangulo(rl, exibirMenu);
        break;
      case '5':
        console.log('\n-> Redirecionando para exercício Volume da esfera apartir do seu diâmetro...');
        VolEsfera(rl, exibirMenu);
        break;
      case '6':
        console.log('\n-> Redirecionando para exercício Média aritimetica...');
        mediaAritimetica(rl, exibirMenu);
        break;
      case '7':
        console.log('\n-> Redirecionando para exercício Média geometrica entre 2 valores...');
        mediaGeometrica(rl, exibirMenu);
        break;
      case '8':
        console.log('\n-> Redirecionando para exercício Conversor de milha marítimas para quilômetros...');
        milhasMaEmMetros(rl, exibirMenu);
        break;
      case '9':
        console.log('\n-> Redirecionando para exercício Calculadora de tensão elétrica...');
        tensaoCircuito(rl, exibirMenu);
        break;
      case '10':
        console.log('\n-> Redirecionando para exercício Calculadora de tensão elétrica...');
        celsiusToFahren(rl, exibirMenu);
        break;
      case '11':
        console.log('\n-> Redirecionando para exercício Calculadora de tensão elétrica...');
        areaCirculo(rl, exibirMenu);
        break;
      case '12':
        console.log('\n-> Redirecionando para exercício Volume do cone...');
        VolCone(rl, exibirMenu);
        break;
      case '13':
        console.log('\n-> Redirecionando para calcular velocidade final...');
        velocidade(rl, exibirMenu);
        break;
      case '14':
        console.log('\n-> Redirecionando para calcular espaço livre...');
        espacoLivre(rl, exibirMenu);
        break;
      case '15':
        console.log('\n-> Redirecionando para converter dolar para real...');
        converterDolar(rl, exibirMenu);
        break;
      case '16':
        console.log('\n-> Redirecionando para Trigonometria...');
        trigonometria(rl, exibirMenu);
        break;
      case '17':
        console.log('\n-> Redirecionando para Potenciação...');
        potenciacao(rl, exibirMenu);
        break;
      case '18':
        console.log('\n-> Redirecionando para calcular troco...');
        produtos(rl, exibirMenu);
        break;
      default:
        console.log('\nOpção inválida! Tente novamente.');
        exibirMenu();
    }
  });
};

exibirMenu();