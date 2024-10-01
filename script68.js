/* 
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.   
*/

let horarioInicial = parseInt(prompt("Digite o horário inicio da partida: "));
let horarioFinal = parseInt(prompt("Digite o horario final da partida: "));
let duracao = 0;

if (horarioFinal < horarioInicial) {
  duracao = 24 - horarioInicial + horarioFinal;
} else {
  duracao = horarioFinal - horarioInicial;
}


console.log("A duração do jogo foi de " + duracao + " horas");


