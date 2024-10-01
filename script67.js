/* 
Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.  
*/

//Solicitando os valores
let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2 = parseFloat(prompt("Digite o segundo valor: "))

//efetuano comparação e exibindo
if (valor1 > valor2) {
  console.log(`${valor2},${valor1}`)
  } else {
    console.log(`${valor1},${valor2}`)
    }



    
