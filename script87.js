/*  Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
a pagar (total a pagar = total - desconto), sabendo-se que: - Se quantidade  <= 5  o desconto será de 2% - Se quantidade  > 5  e
  quantidade  <=10  o desconto será de 3% - Se quantidade  >  10 o desconto será de 5%. 
*/

let nome = prompt("Digite o nome do produto: ");
let quantidade = Number(prompt("Digite a quantidade adquirida: "));
let precoUnitario = Number(prompt("Digite o preço unitário: "));

// Cálculo do valor total
let total = quantidade * precoUnitario;
let desconto = 0;
let totalAPagar = 0;

// Condições para calcular o desconto
if (quantidade <= 5) {
  desconto = total * 0.02; // 2% de desconto
} else if (quantidade > 5 && quantidade <= 10) {
  desconto = total * 0.03; // 3% de desconto
} else {
  desconto = total * 0.05; // 5% de desconto
}

// Cálculo do total a pagar
totalAPagar = total - desconto;

// Exibe os resultados
console.log(`Produto: ${nome}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço Unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
