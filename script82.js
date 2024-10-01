/* Seja o seguinte algoritmo: 
início 
ler x 
ler y 
z  
(x*y) + 5 
se z <= 0 então 
resposta  
‘A’ 
senão 
se z <= 100 então 
resposta  
senão 
resposta  
‘B’ 
‘C’ 
fim_se 
fim_se 
escrever  z, resposta 
fim 
Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:  */

//declarando variáveis e solicitando valores

let x = Number(prompt("Digite o valor de x:"));
let y = Number(prompt("Digite o valor de y:"));
let z = x * y + 5; // calculando o valor de z
//criando condicionais para o algoritmo
if (z <= 0) {
  let resposta = "A";
} else if (z <= 100) {
  resposta = "B";
} else {
  resposta = "C";
}
//imprimindo resultado
console.log("O valor de z é:", z);
console.log("A resposta é:", resposta);
//fim do programa
