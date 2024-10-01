/*  Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja 
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a 
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se 
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a 
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’ 
*/

let codigo = prompt("Digite o código de usuário: "); //pede-se para inserir o código de usuario
let senha = prompt("Digite a senha: "); //pede-se para inserir a senha
if (codigo != 1234) {
  // se o usuario for diferente e 1234 exibirá a mensagem "Usuário inválido!"
  alert("Usuário inválido!");
} else {
  if (senha != 9999) {
    // se a senha for diferente e 9999 exibirá a mensagem "Senha incorreta"
    alert("Senha incorreta");
  } else {
    alert("Acesso permitido");
  }
}
