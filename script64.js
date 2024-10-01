/* 
 Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada. 
*/

let primeiraNota = parseFloat(prompt("Digite o valor da primeira nota: "));
let segundaNota = parseFloat(prompt("Digite o valor da segunda nota: "));

let media = (primeiraNota + segundaNota) / 2;

if (media < 6) {
  alert(`O aluno foi reprovado! \n
    A média foi:  ${media}`);
} else {
  alert(`O aluno foi aprovado! \n
      A média foi:  ${media}`);
}
