/* 
Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores. 
*/

// Aqui será inserido os valores ddos tipos de votos
let votosValidos = parseInt(prompt("Digite o valor de votos válidos: "));
let votosNulos = parseInt(prompt("Digite o valor de votos nulos: "));
let votosBrancos = parseInt(prompt("Digite o valor de votos brancos: "));

// declarando a variavel total para somar as demais variáveis
let total = votosValidos + votosNulos + votosBrancos;

// é exibido um alert e um console.log para exibir o total
alert(`O total de votos analisados é: ${total}`);
console.log(`O total de votos analisados é: ${total}`);


//calculos do percentual de cada tipo de voto
let porcentagemVotosValidos = (votosValidos / total) * 100;
let porcentagemVotosNulos = (votosNulos / total) * 100;
let porcentagemVotosBrancos = (votosBrancos / total) * 100;




// exibindo os resultados dos percentuais
alert(
  `O percentual de votos válidos é: ${porcentagemVotosValidos.toFixed(2)} %`
);
console.log(
  `O percentual de votos válidos é: ${porcentagemVotosValidos.toFixed(2)} %`
);

alert(`O percentual de votos nulos é: ${porcentagemVotosNulos.toFixed(2)} %`);
console.log(`O percentual de votos nulos é: ${porcentagemVotosNulos.toFixed(2)} %`);

alert(`O percentual de votos brancos é: ${porcentagemVotosBrancos.toFixed(2)} %`);
console.log(`O percentual de votos brancos é: ${porcentagemVotosBrancos.toFixed(2)} %`);
