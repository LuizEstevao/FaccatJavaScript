/* 
2) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
(considere que o mês possua 4 semanas exatas).   
*/

let salarioFixo = parseFloat(prompt("Digite o valor o salário fixo: "));

let carrosVendidos = parseInt(prompt("Digite o numero de carros vendidos: "));

let valorTotalVendas = parseFloat(prompt("Digite o valor total de vendas: "));


let comissaoPorCarrosVendidos = carrosVendidos * carrosVendidos;

let comissaoPercentual = valorTotalVendas * 0.05
let salarioTotal = salarioFixo + comissaoPorCarrosVendidos + comissaoPercentual;

console.log(`O salário final do vendedor é: R$ ${salarioTotal.toFixed(2)}`);




