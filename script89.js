/*   Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
estar em condições, um dos
 seguintes requisitos deve ser satisfeito: - Ter no mínimo 65 anos de idade. - Ter trabalhado no mínimo 30 anos. - Ter no mínimo 60 anos  e
 ter trabalhado no mínimo 25 anos. 
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'.
*/

let idade = 0;
let tempoTrabalho = 0;
let codigo = 0;
let anoNascimento = 0;
let anoIngresso = 0;
let anoAtual = 2024;
let mensagem = "";

// Receber os dados do empregado
codigo = parseInt(prompt("Digite o código do empregado:"));
anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
anoIngresso = parseInt(prompt("Digite o ano de ingresso do empregado:"));

// Calcular a idade e o tempo de trabalho
idade = anoAtual - anoNascimento;
tempoTrabalho = anoAtual - anoIngresso;

// Verificar se o empregado pode requerer a aposentadoria
if (
  idade >= 65 ||
  tempoTrabalho >= 30 ||
  (idade >= 60 && tempoTrabalho >= 25)
) {
  mensagem = "Requerer aposentadoria";
} else {
  mensagem = "Não requerer aposentadoria";
}

// Exibir as informações e a mensagem final
console.log("Código do empregado: " + codigo);
console.log("Idade: " + idade + " anos");
console.log("Tempo de trabalho: " + tempoTrabalho + " anos");
console.log(mensagem);
