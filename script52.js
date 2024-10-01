/* 
 Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a 
área dos poligonos (triangulo,retangulo,quadrado,hexagono,circulo)
*/

// declarando o seletor de poligonos para efetuar os calculos
let seletor = parseFloat(
  prompt(
    "Digite um numero e escolha o poligono que eseja calcular a area: \n 1 - retangulo \n 2 - triangulo \n 3 - quadrado \n 4 - hexagono \n 5 - circulo"
  )
);

switch (seletor) {
  case 1:
    //calculo da area o retangulo
    console.log(`Foi escolhido o poligono: ${seletor}`);
    let baseRetangulo = parseFloat(prompt("Digite o valor da base:"));
    let alturaRetangulo = parseFloat(prompt("Digite o valor da altura:"));
    let areaRetangulo = baseRetangulo * alturaRetangulo;
    console.log(`A area do retangulo é: ${areaRetangulo.toFixed(2)}`);
    alert(`A area do retangulo é: ${areaRetangulo.toFixed(2)}`);
    break;
  case 2:
    //calculo da area do triangulo
    console.log(`Foi escolhido o poligono: ${seletor}`);
    let baseTriangulo = parseFloat(prompt("Digite o valor da base:"));
    let alturaTriangulo = parseFloat(prompt("Digite o valor da base:"));
    let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log(`A area do triangulo é: ${areaTriangulo.toFixed(2)}`);
    alert(`A area do triangulo é: ${areaTriangulo.toFixed(2)}`);
    break;
  case 3:
    //calculo da area do quadrado
    console.log(`Foi escolhido o poligono: ${seletor}`);
    let ladoQuadrado = parseFloat(prompt("Digite o valor da base:"));
    let areaQuadrado = ladoQuadrado * ladoQuadrado;
    console.log(`A area do quadrado é: ${areaQuadrado.toFixed(2)}`);
    alert(`A area do quadrado é: ${areaQuadrado.toFixed(2)}`);
    break;
  case 4:
    //calculo da area do hexagono
    console.log(`Foi escolhido o poligono: ${seletor}`);
    let ladoHexagono = parseFloat(
      prompt("Digite o valor do lado do hexagono:")
    );
    let apotema = (ladoHexagono * 1.73) / 2;
    ladoHexagono = ladoHexagono * 6;
    let areaHexagono = (ladoHexagono * apotema) / 2;
    console.log(`A area do hexagono é: ${areaHexagono.toFixed(2)}`);
    alert(`A area do hexagono é aproximadamente : ${areaHexagono.toFixed(2)}`);
    break;
  case 5:
    //calculo da area do circulo
    console.log(`Foi escolhido o poligono: ${seletor}`);
    let raioCirculo = parseFloat(prompt("Digite o valor do raio do circulo"));
    let areaCirculo = 3.14 * raioCirculo * raioCirculo;
    console.log(
      `A area do circulo é aproximadamente: ${areaCirculo.toFixed(2)}`
    );
    alert(`A area do circulo é : ${areaCirculo.toFixed(2)}`);
    break;
}
