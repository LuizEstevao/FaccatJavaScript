/* 
Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário. 
*/

let salarioAtual = parseFloat(prompt("Digite o valor do seu salário atual:"));
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste:"));

let novoSalario = ((salarioAtual * percentualReajuste) / 100) + salarioAtual;


console.log(`com aumento de ${percentualReajuste.toFixed(2)
} % `);
alert(`com aumento de ${percentualReajuste.toFixed(2)
} % `);




console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)
  } `);
  // ou
   alert(`O novo salário é: R$ ${novoSalario.toFixed(2
  )}`);