function ContagemFor() {
  let numero,
    contador,
    mensagem = "CONTAGEM COM FOR\n";

  numero = parseInt(
    prompt(
      "Contagem até 500! Digite um número menor que 500 e eu direi se é par ou ímpar:"
    )
  );

  for (contador = numero; contador <= 500; contador++) {
    if (contador % 2 === 0) {
      mensagem = mensagem + contador + " - PAR\n";
    } else {
      mensagem = mensagem + contador + " - ÍMPAR\n";
    }
  }

  alert(mensagem);
}
