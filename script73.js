/* 
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
compra'. 
*/
let estoque = Number(prompt("Quantidade atual em estoque:"));
let maximo = Number(prompt("Quantidade máxima em estoque:"));
let minimo = Number(prompt("Quantidade mínima em estoque:"));
let media = (maximo + minimo) / 2;
if (estoque >= media) {
  alert("Não efetuar compra");
} else {
  alert("Efetuar compra");
}
console.log(media);
console.log(estoque);
console.log(maximo);
console.log(minimo);



let numero = parseFloat(prompt("Digite umm valor: "));

if (numero > 0) {
  console.log("O valor é positivo");
} else if (numero < 0) {
  console.log("O valor é negativo");
} else {
  console.log("O valor é zero");
}
