/* 
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius 
*/

//solicitando a temperatura em graus celsius
let fahrenheit = Number(prompt("Digite a temperatura em graus Fahrenheit: "));

//conversão de graus fahrenheit para graus celsius
let Celsius = (5 / 9) * (fahrenheit - 32);

//exibindo o resultado
console.log(
  `${fahrenheit} F° é igual a ${Celsius}    C°`
);
alert(`${fahrenheit} graus Fahrenheit é igual a ${Celsius} graus Celsius`);
