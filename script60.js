/* 
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 

*/

//aqui é pedido para inserir as notas
let primeiraNota = parseInt(prompt("Digite o valor da primeira nota: "));
let segundaNota = parseInt(prompt("Digite o valor da segunda nota: "));
let terceiraNota = parseInt(prompt("Digite o valor da terceira nota: "));


//realizando o calculo
let media = (primeiraNota * 2 + segundaNota * 3 + terceiraNota * 5) / 10;


//exibindo os resultados
console.log(`A média final é: ${media}`);
alert(`A média final é: ${media}`);

