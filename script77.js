/*Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem 
crescente. */

// Lê os três valores
let numero1 = Number(prompt("Digite o primeiro valor: "));
let numero2 = Number(prompt("Digite o segundo valor: "));
let numero3 = Number(prompt("Digite o terceiro valor: "));

let menor, meio, maior;

// Verifica a ordem dos números
if (numero1 < numero2 && numero1 < numero3) {
  menor = numero1;
  if (numero2 < numero3) {
    meio = numero2;
    maior = numero3;
  } else {
    meio = numero3;
    maior = numero2;
  }
} else if (numero2 < numero1 && numero2 < numero3) {
  menor = numero2;
  if (numero1 < numero3) {
    meio = numero1;
    maior = numero3;
  } else {
    meio = numero3;
    maior = numero1;
  }
} else {
  menor = numero3;
  if (numero1 < numero2) {
    meio = numero1;
    maior = numero2;
  } else {
    meio = numero2;
    maior = numero1;
  }
}

// Exibe os números em ordem crescente
console.log(`Os valores em ordem crescente são: ${menor}, ${meio}, ${maior}`);
