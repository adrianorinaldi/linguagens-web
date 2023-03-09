let opcao = 0
const imoveis = []

do {
  opcao = parseFloat(prompt("Total de imoveis: "+imoveis.length+"\n"
                    +"1 - Cadastrar novo imóvel\n"
                    +"2 - Listar imóveis\n"
                    +"3 - Sair"))
  switch(opcao){
    case 1:
      const imovel = {}
      imovel.proprietario = prompt("Digite o nome do proprietario")
      imovel.quartos = prompt("Digite a quantidade de quartos")
      imovel.banheiros = prompt("Digite a quantidade de banheiros")
      imovel.garagem = prompt("Possui garagem?\nS\nN")
      imoveis.push(imovel)
      break
    case 2:
      if(imoveis.length === 0){
        alert("Não tem imóveis cadastrados")
      }else{
        for (let i = 0; i < imoveis.length; i++){
          alert(
            "imovel= "+ (i + 1)+
            "\nProprietario= "+ imoveis[i].proprietario +
            "\nQuartos= "+ imoveis[i].quartos+
            "\nBanheiros= "+ imoveis[i].banheiros+
            "\nPossui garagem? "+imoveis[i].garagem+"\n"
          )
        }
      }
      break
    case 3:
      alert("Encerrando")
      break
    default:
      alert("opção inválida")
      break
  } 
}while(opcao != 3) 