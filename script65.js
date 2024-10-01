/* 
 Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 
*/

let anoAtual = parseInt(prompt("Digite o ano atual"));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento"));
let idade = anoAtual - anoNascimento;
if (idade >= 16) {
  alert("Você poderá votar este ano.");
  } else {
    alert("Você não poderá votar este ano.");
    }
    
