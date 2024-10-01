/* 
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor. 
*/

let precoDeFabrica = parseInt(prompt("Digite o custo de fábrica do veiculo"))

let percentualDistribuidor = precoDeFabrica * 0.28;
let impostos = precoDeFabrica * 0.45;
let precoFinal = precoDeFabrica + percentualDistribuidor + impostos;

console.log(`O preço de fábrica deste veiculo é: ${precoDeFabrica} `);
alert(`O preço de fábrica deste veiculo é: ${precoDeFabrica} `);

console.log("Portanto, aplicando impostos e o percentual do distribuidor");
alert("Portanto, aplicando impostos e o percentual do distribuidor");

console.log(`O valor final é ${precoFinal} R$`);
alert(`O valor final é ${precoFinal} R$`);





