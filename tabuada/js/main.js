function tabuada() {
  let numero, contador, resultado, mensagem;

  numero = parseInt(
    prompt("Digite um número da tabuada que deseja vizualizar:\n")
  );

  contador = 0;

  mensagem = `Tabuada do ${numero}: \n`;

  while (contador <= 10) {
    resultado = numero * contador;
    mensagem = mensagem + numero + " x " + contador + " = " + resultado + "\n";
    // alert(`${numero} x ${contador} = ${resultado}\n`);
    contador = contador + 1;
  }

  alert(mensagem + "\n FIM!");
}
