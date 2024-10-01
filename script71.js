/* 
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total. 
*/

let salarioFixo = Number(prompt("Digite o salário fixo do vendedor: "));
let vendas = Number(prompt("Digite o valor total das vendas efetuadas: "));

let comissao;

// Verifica se as vendas são até R$ 1.500,00 ou se ultrapassam
if (vendas <= 1500) {
    // Comissão de 3% sobre o total das vendas
    comissao = vendas * 0.03;
} else {
    // Comissão de 3% sobre R$ 1.500,00 mais 5% sobre o valor que exceder R$ 1.500,00
    comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05);
}

// Calcula o salário total
let salarioTotal = salarioFixo + comissao;

// Exibe o salário total
console.log(`O salário total do vendedor é R$ ${salarioTotal.toFixed(2)}.`);