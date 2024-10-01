/* 
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
*/

let numeroConta = prompt("Digite o número da conta do cliente: ");
let saldo = parseFloat(prompt("Digite o saldo da conta: "));
let debito = parseFloat(prompt("Digite o débito da conta: "));
let credito = parseFloat(prompt("Digite o crédito da conta: "));
let saldoAtual = saldo - debito + credito;
if (saldoAtual >= 0) {
  console.log("Saldo Positivo");
} else {
  console.log("Saldo Negativo");
}
console.log(`Saldo Atual: ${saldoAtual}`);
console.log(`Número da Conta: ${numeroConta}`);
console.log(`Saldo: ${saldo}`);
