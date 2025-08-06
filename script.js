function calcular() {
  const n1 = parseFloat(document.getElementById("numero1").value);
  const n2 = parseFloat(document.getElementById("numero2").value);
  const operacao = document.getElementById("operacao").value;

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultado").innerText = "Digite dois números válidos!";
    return;
  }

  let resultado;

  switch (operacao) {
    case "soma":
      resultado = n1 + n2;
      break;
    case "subtracao":
      resultado = n1 - n2;
      break;
    case "multiplicacao":
      resultado = n1 * n2;
      break;
    case "divisao":
      if (n2 === 0) {
        document.getElementById("resultado").innerText = "Erro: divisão por zero!";
        return;
      }
      resultado = n1 / n2;
      break;
    default:
      document.getElementById("resultado").innerText = "Operação inválida!";
      return;
  }

  let parOuImpar = "";
  if (Number.isInteger(resultado)) {
    parOuImpar = resultado % 2 === 0 ? " (par)" : " (ímpar)";
  }

  document.getElementById("resultado").innerText = `Resultado: ${resultado}${parOuImpar}`;
}
