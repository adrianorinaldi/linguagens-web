//////exercicio fila de espera
let pacientes = []
let resposta = 0

do{
  resposta = parseFloat(prompt("1 - Adicionar novo paciente ao final da fila"+
                                "\n2 - Consultar próximo paciente da fila"+
                                "\n3 - Listar pacientes da fila"+
                                "\n4 - SAIR"))
  switch(resposta){
    case 1:
      pacientes.push(prompt("Digite o nome do paciente"))
      break
    case 2:
      if(pacientes.length == 0){
        alert("Não existem mais pacientes")
      }else{
        alert("O paciente " + pacientes.shift() + " foi consultado")
      }
      break
    case 3:
      if(pacientes.length == 0){
        alert("Não existem mais pacientes")
      }else{
        let paciente = ""
        for(let indice = 0; indice < pacientes.length; indice++){
          paciente += pacientes[indice] + "\n"
        }
        alert(paciente)
      }
      break
    case 4:
      break
    default:
      alert("opcao invalida")
  }
}while(resposta != 4)