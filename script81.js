/* Ler dois valores e imprimir uma das três mensagens a seguir: 
‘Números iguais’, caso os números sejam iguais 
‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
‘Segundo maior’, caso o segundo seja maior que o primeiro.   */

//declarando variáveis e solicitando valores
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
if (num1 == num2) { //se os valores for iguais
  console.log("Números iguais");
} else if (num1 > num2) {// se o primeiro for maior
  console.log("Primeiro é maior");
} else { // se o segundo for maior
  console.log("Segundo é maior");
}
