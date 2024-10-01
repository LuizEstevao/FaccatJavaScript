/*Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
dos outros 2 lados.  */

// Função para verificar se os lados formam um triângulo
function formaTriangulo(a, b, c) {
  return (a < b + c) && (b < a + c) && (c < a + b);
}

// Entrada de dados
let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));

let mensagem = "";

// Verificar se é um triângulo
if (formaTriangulo(ladoA, ladoB, ladoC)) {
  if (ladoA === ladoB && ladoB === ladoC) {
      mensagem = "Triângulo Equilátero";
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
      mensagem = "Triângulo Isósceles";
  } else {
      mensagem = "Triângulo Escaleno";
  }
} else {
  mensagem = "Não é possível formar um triângulo";
}

// Exibir resultado
alert(mensagem);


