/* 
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor. 
*/

// Solicita os dados de entrada
let salarioFixo = parseFloat(prompt("Digite o valor do salário fixo:"));
let carrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
let valorPorCarro = parseFloat(prompt("Digite o valor recebido por carro vendido:"));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));

// Calcula a comissão fixa por carro vendido
let comissaoPorCarrosVendidos = carrosVendidos * valorPorCarro;

// Calcula os 5% sobre o valor total das vendas
let comissaoPercentual = valorTotalVendas * 0.05;

// Calcula o salário final
let salarioFinal = salarioFixo + comissaoPorCarrosVendidos + comissaoPercentual;

// Exibe o resultado
console.log(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);
alert(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);





