/* 
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
*/

// solicitando que seja inserido os dados 
let idade = parseInt(prompt("Digite sua idade: "))
let meses = parseInt(prompt("Digite quantos meses se passou desde seu ultimo aniversário: "))
let dias = parseInt(prompt("Digite em que dia vc está:"));

//calculo
let totalDias = idade * 365 + meses * 30 + dias;

//exibindo o resultado
console.log(`Você viveu por ${totalDias} dias`);
alert(`Você viveu por ${totalDias} dias`);
