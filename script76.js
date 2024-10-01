/* 
Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 
maiores. 
*/

// Lê os três valores
let numero1 = Number(prompt("Digite o primeiro valor: "));
let numero2 = Number(prompt("Digite o segundo valor: "));
let numero3 = Number(prompt("Digite o terceiro valor: "));

let somaDosMaiores;

// Verifica quais são os dois maiores valores e calcula a soma
if (numero1 < numero2 && numero1 < numero3) {
  // Se o primeiro número for o menor, soma os dois maiores (numero2 e numero3)
  somaDosMaiores = numero2 + numero3;
} else if (numero2 < numero1 && numero2 < numero3) {
  // Se o segundo número for o menor, soma os dois maiores (numero1 e numero3)
  somaDosMaiores = numero1 + numero3;
} else {
  // Se o terceiro número for o menor, soma os dois maiores (numero1 e numero2)
  somaDosMaiores = numero1 + numero2;
}

// Exibe a soma dos dois maiores valores
console.log(`A soma dos dois maiores valores é: ${somaDosMaiores}`);
