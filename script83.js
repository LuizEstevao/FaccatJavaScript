/*  Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
Álcool 
até 20 litros, desconto de 3% por litro 
acima de 20 litros, desconto de 5% por litro 
até 20 litros, desconto de 4% por litro 
Gasolina 
acima de 20 litros, desconto de 6% por litro  

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da 
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se 
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 

*/

let combustivel = prompt("Qual o tipo de combustível? (A-álcool, G-gasolina):");
let litros = parseFloat(prompt("Quantos litros foram vendidos?"));
let precoAlcool = 2.9;
let precoGasolina = 3.3;
let valor = 0;

if (combustivel === "A") {
  if (litros <= 20) {
    valor = litros * precoAlcool * (1 - 0.03); // Desconto de 3%
  } else {
    valor = litros * precoAlcool * (1 - 0.05); // Desconto de 5% para acima de 20 litros
  }
} else if (combustivel === "G") {
  if (litros <= 20) {
    valor = litros * precoGasolina * (1 - 0.04); // Desconto de 4%
  } else {
    valor = litros * precoGasolina * (1 - 0.06); // Desconto de 6% para acima de 20 litros
  }
} else {
  console.log("Tipo de combustível inválido.");
}

// Exibir valor final, caso o combustível seja válido
if (combustivel === "A" || combustivel === "G") {
  console.log("O valor a ser pago é R$ " + valor.toFixed(2));
}
