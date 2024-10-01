/*  
Seja o seguinte algoritmo: 
      inicio 
          ler a, b, c 
            se (a < b+c) e (b <a+c) e (c <a+b) então 
              se (a=b) e (b=c) então 
                mens  
            senão 
                '   Triângulo Equilátero' 
            se (a=b) ou (b=c) ou (a=c) então 
                  mens  
                    'Triângulo Isósceles' 
            senão 
                  mens  
            fim_se 
              fim_se 
            senão 
                  mens  
                    'Triângulo Escaleno' 
                    'Não e possível formar um triângulo' 
            fim_se 
    escrever mens 
fim 
Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:
*/


// Função para verificar e classificar o triângulo
function verificarTriangulo(a, b, c) {
  let mensagem = "";

  // Verificar se os valores formam um triângulo
  if (a < b + c && b < a + c && c < a + b) {
      // Verificar se é um triângulo equilátero
      if (a === b && b === c) {
          mensagem = "Triângulo Equilátero";
      } 
      // Verificar se é um triângulo isósceles
      else if (a === b || b === c || a === c) {
          mensagem = "Triângulo Isósceles";
      } 
      // Se não for equilátero nem isósceles, é escaleno
      else {
          mensagem = "Triângulo Escaleno";
      }
  } else {
      // Não é possível formar um triângulo
      mensagem = "Não é possível formar um triângulo";
  }

  // Exibir o resultado
  console.log(mensagem);
}

// Testes com diferentes valores
verificarTriangulo(3, 3, 3); // Triângulo Equilátero
verificarTriangulo(5, 5, 7); // Triângulo Isósceles
verificarTriangulo(4, 6, 10); // Não é possível formar um triângulo
verificarTriangulo(3, 4, 5); // Triângulo Escaleno
verificarTriangulo(2, 9, 6); // Não é possível formar um triângulo
