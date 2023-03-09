let saldo = parseFloat(prompt("informe a quantidade de dinheiro inicial"))
let opcao = ""

do{
  opcao = prompt("Saldo disponivel: "+ saldo + "\n1 - Adicionar dinheiro \n2- Remover dinheiro \n3- Sair")

  switch (opcao){
    case "1":
      saldo += parseFloat(prompt("Informe o valor"))
      break
    case "2":
      saldo -= parseFloat(prompt("Informe o valor"))
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opcao invalida")
  }
} while(opcao !== "3")