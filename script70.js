/* 
Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém 
erros
 , identifique os erros no algoritmo apresentado abaixo: 
Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule 
e mostre seu peso ideal, utilizando as seguintes fórmulas: - para sexo masculino:  peso ideal = (72.7 * altura) - 58 - para sexo feminino:  peso ideal = (62.1 * altura) - 44.7   
*/

let nome = prompt("Digite seu nome: ");
let altura = Number(prompt("Digite sua altura: "));
let seletor = prompt("Digite o sexo pelo código (M ou F): ").toUpperCase(); // Para garantir que seja maiúsculo

let pesoIdeal;

if (seletor === "M") {
  pesoIdeal = 72.7 * altura - 58;
} else if (seletor === "F") {
  pesoIdeal = 62.1 * altura - 44.7;
} else {
  console.log("Código de sexo inválido.");
}

if (pesoIdeal) {
  console.log(`O peso ideal de ${nome} é ${pesoIdeal.toFixed(2)} kg.`);
}
