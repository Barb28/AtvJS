function contagem2numeros() {
  let numeroInicial, numeroFinal, contador, mensagem;

  numeroInicial = parseInt(prompt("Digite um número para iniciar a contagem:"));
  numeroFinal = parseInt(prompt("Digite um número para finalizar a contagem:"));

  while (numeroInicial > numeroFinal) {
    alert("Digite um número válido!");
    return;
  }

  for (contador = numeroInicial; contador <= numeroFinal; contador++) {
    if (contador === numeroInicial) {
      mensagem += contador + " - ÍNICIO\n";
    } else if (contador === numeroFinal) {
      mensagem += contador + " - FIM\n";
    } else {
      mensagem += contador + "\n";
    }
  }

  alert(mensagem);
}
