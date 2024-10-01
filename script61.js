/* 
Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
contrário escrever NÃO É MAIOR QUE 10! 

*/

//aqui se pede para inserir o valor 
let numero = parseFloat(prompt("Digite um valor: "));
if (numero > 10) { // Se o numero for maior que 10
    alert("É MAIOR QUE 10!");
} else if (numero < 10) { // Se o numero for menor que 10
    alert("É MENOR QUE 10!");
} else {// Se o numero for igual a 10
    alert("O valor digitado é igual a 10");
}

    



