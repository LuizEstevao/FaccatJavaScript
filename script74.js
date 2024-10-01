/* 
Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem 
crescente. 
*/


let numero = parseFloat(prompt("Digite umm valor: "));

if (numero > 0) {
  console.log("O valor é positivo");
} else if (numero < 0) {
  console.log("O valor é negativo");
} else {
  console.log("O valor é zero");
}
