/* 
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra. 
*/

//Insira aqui a quantidade e maçãs
let quantidadeDemacas = parseInt(prompt("Digite o valor de maças compradas: "))

// declarando o preço das maçãs para prevenir erros
let precoDasMacas = 0;

// se maçãs for maior ou igual a 12 o preço da unidade é 1 
if( quantidadeDemacas >= 12) {
  precoDasMacas = 1
} else if (quantidadeDemacas < 12) { // se maçãs for menor que  12 o preço da unidade é 1.30 
  precoDasMacas = 1.30
}

//calculo de custo
let custoTotal = precoDasMacas * quantidadeDemacas

// exibindo o resultado
console.log(`O custo total da compra é: R$ ${custoTotal.toFixed(2)}`)
alert(`O custo total da compra é: R$ ${custoTotal.toFixed(2)}`)

