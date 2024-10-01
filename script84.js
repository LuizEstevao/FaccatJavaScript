/*  Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais 
novo com a mulher mais velha. 
*/

let idadeHomem1 = Number(prompt("Digite a idade do primeiro homem: "));
let idadeHomem2 = Number(prompt("Digite a idade do segundo homem: "));
let idadeMulher1 = Number(prompt("Digite a idade da primeira mulher: "));
let idadeMulher2 = Number(prompt("Digite a idade da segunda mulher: "));

// Variáveis para armazenar o mais velho e o mais novo
let homemMaisVelho, homemMaisNovo;
let mulherMaisNova, mulherMaisVelha;

// Verifica quem é o homem mais velho e o mais novo
if (idadeHomem1 > idadeHomem2) {
  homemMaisVelho = idadeHomem1;
  homemMaisNovo = idadeHomem2;
} else {
  homemMaisVelho = idadeHomem2;
  homemMaisNovo = idadeHomem1;
}

// Verifica quem é a mulher mais nova e a mais velha
if (idadeMulher1 > idadeMulher2) {
  mulherMaisVelha = idadeMulher1;
  mulherMaisNova = idadeMulher2;
} else {
  mulherMaisVelha = idadeMulher2;
  mulherMaisNova = idadeMulher1;
}

// Calcula a soma e o produto
let somaIdades = homemMaisVelho + mulherMaisNova;
let produtoIdades = homemMaisNovo * mulherMaisVelha;

// Exibe os resultados
alert(
  `A soma das idades do homem mais velho com a mulher mais nova é: ${somaIdades} e o produto das idades do homem mais novo com a mulher mais velha é: ${produtoIdades}`
);
console.log(
  `A soma das idades do homem mais velho com a mulher mais nova é: ${somaIdades} e o produto das idades do homem mais novo com a mulher mais velha é: ${produtoIdades}`
);
