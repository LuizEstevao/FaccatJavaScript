/*  Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos 
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, 
*/

// Lê as 3 notas obtidas pelo aluno
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));

// Lê a média dos exercícios
let mediaExercicios = Number(prompt("Digite a média dos exercícios: "));

// Calcula a média de aproveitamento
let mediaAproveitamento = (nota1 + nota2 + nota3 + mediaExercicios) / 4;

// Exibe a média de aproveitamento no console e em um alerta
console.log(`A média de aproveitamento é: ${mediaAproveitamento.toFixed(2)}`);
alert(`A média de aproveitamento é: ${mediaAproveitamento.toFixed(2)}`);
