let estado = "lista";

switch (estado) {
  case "aprovado":
    console.log("Voce foi aprovado");
    break;

  case "lista":
    console.log("Voce esta na lista de espera");
    break;

  case "reprovada":
    console.log("reprovada");
    break;

  default:
    console.log("Nao se aplica")
}