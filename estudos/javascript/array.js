/*const listaDeCompras = ["teste", false]
console.log(listaDeCompras)

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "feijão"
listaDeCompras[2] = 7

console.log(listaDeCompras)
console.log(listaDeCompras[1])*/
/*
const arr = ["Adriano", "tainara", "fernanda", "pedro", "joao", "paulo", "teste"]
console.log(arr)

//insere um elemento no final do array
arr.push("ultimo")
console.log(arr)

//insere um elemento no começo do array
arr.unshift("primeiro")
console.log(arr)

//remove o ultimo elemento do array
arr.pop()

///remove o primeiro elemento do array
arr.shift()

//busca se tem o elemento e retorna um boolean
let possui = arr.includes("tainara")
console.log(possui)

//retorna o indice do elemento
possui = arr.indexOf("pedro")
console.log(possui)

//copiar do 0 até antes do 4 e jogar para outro array
let outro = arr.slice(0,4)

//concatena arrays e valores
const sociedade = outro.concat(arr,"outros")

//remove elementos do array
const a = sociedade.splice(1,2)

//substitui elementos do array
const b = sociedade.splice(1,1,"novo elemento")

//iterar sobre os elementos
let elemento = ""
for(let indice = 0; indice < sociedade.length; indice++){
  elemento += sociedade[indice] + "\n"
}
console.log(elemento)*/
/*
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
}while(resposta != 4)*/

////exercicio baralho
let baralho = []
let carta = ""
let opcao = 0

do{
  let cartas = "baralho:\n"
  for(let indice = 0; indice < baralho.length; indice++){
    cartas += baralho[indice] + "\n"
  }

  opcao = parseFloat(prompt(cartas+"\n"+
                            "1- Adicionar uma carta"+
                            "\n2 - Puxar uma carta"+
                            "\n3 - Sair"))
  switch(opcao){
    case 1:
      baralho.unshift(prompt("Digite a carta"))
      break
    case 2:
      if(baralho.length == 0){
        alert("Não existem cartas no baralho")
      }else{
        alert("A carta " + baralho.shift() + " foi puxada")
      }
      break
    case 3:
      break
    default:
      alert("opcao invalida")
  }
}while(opcao != 3)