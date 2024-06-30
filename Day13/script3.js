let hospede = "entrada";
let quarto = "sujo";
let cardapio = "Gostou das opções";

switch (hospede) {
  case "entrada":
    console.log("fazer Check-in");
    break;
  case "saída":
    console.log("Fazer Check-in");
    break;
  default:
    console.log("Hospede não entrou no hotel");
    break;
}

switch (quarto) {
  case "sujo":
    console.log("Chamar serviço de quarto");
    break;
  case "limpo":
    console.log("Aproveitar o quarto");
    break;
  default:
    console.log("serviço indisponível!");
    break;
}

switch (cardapio) {
  case "Gostou das opções":
    console.log("Fazer pedido");
    break;
  case "Não gostou das opções":
    console.log("Não fazer pedido");
    break;
  default:
    console.log("serviço indisponível!");
    break;
}
