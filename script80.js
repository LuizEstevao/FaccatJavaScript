/*Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.  */

let time1 = prompt("Digite o nome do primeiro time: ");
let time2 = prompt("Digite o nome do segundo time: ");
let gols1 = parseInt(prompt("Quantos gols o primeiro time marcou? "));
let gols2 = parseInt(prompt("Quantos gols o segundo time marcou? "));
if (gols1 > gols2) {
  console.log(`O vencedor foi ${time1}`);
} else if (gols2 > gols1) {
  console.log(`O vencedor foi ${time2}`);
} else {
  console.log("EMPATE");
}


console.log(`A partida teve o placar de ${time1} ${gols1} X ${gols2} ${time2} `)

alert(`A partida teve o placar de ${time1} ${gols1} X ${gols2} ${time2} `)
