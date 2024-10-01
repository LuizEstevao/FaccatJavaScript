/* 
Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 

*/

//aqui se pede para inserir o valor
let numero = parseFloat(prompt("Digite um valor: "));
if (numero >= 0) {
  // Se o numero for maior ou igual a 0 é positivo
  alert("O valor é positivo!");
} else { // se não é menor que 0
  alert("O valor é negativo ");
}
