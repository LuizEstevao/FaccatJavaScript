/*   Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
Até 5 Kg 
Acima de 5 Kg 
Morango 
R$ 2,50 por Kg 
Maçã 
R$ 2,20 por Kg 
R$ 1,80 por Kg 
R$ 1,50 por Kg 
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 
*/

let precoMorango;
let precoMaca;

// Definindo o preço do morango com if...else
if (kgMorango <= 5) {
  precoMorango = 2.5; // Até 5 Kg
} else {
  precoMorango = 2.2; // Acima de 5 Kg
}

// Definindo o preço da maçã com if...else
if (kgMaca <= 5) {
  precoMaca = 1.8; // Até 5 Kg
} else {
  precoMaca = 1.5; // Acima de 5 Kg
}

// Cálculo do valor total
let valorMorango = kgMorango * precoMorango;
let valorMaca = kgMaca * precoMaca;
let valorTotal = valorMorango + valorMaca;
let quantidadeTotalKg = kgMorango + kgMaca;

// Verifica se o cliente tem direito ao desconto de 10%
if (quantidadeTotalKg > 8 || valorTotal > 25) {
  valorTotal = valorTotal * 0.9; // Aplica o desconto de 10%
}

// Exibe o valor total a ser pago
alert(`O valor total a ser pago é: R$ ${valorTotal.toFixed(2)}`);
console.log(`O valor total a ser pago é: R$ ${valorTotal.toFixed(2)}`);
