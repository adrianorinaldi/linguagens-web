////altera a variavel dentro da funcao quando chamada
//variavel criada no escopo de fora pode ser usada no escopo de dentro
//variavel criada dentro do escopo não da para usar fora.
/*let nome = "Adriano"

function evoluir() {
  nome = "teste"
}

console.log(nome)
evoluir()
console.log(nome)*/

function triangulo(){
  let base = parseFloat(prompt("Digite a base"))
  let altura = parseFloat(prompt("Digite a altura"))
  return base * altura / 2
}
function retangulo(){  
  let base = parseFloat(prompt("Digite a base"))
  let altura = parseFloat(prompt("Digite a altura"))
  return base * altura
}
function quadrado(){
  let lado = parseFloat(prompt("Digite o lado"))
  return lado * lado
}
function trapezio(){
  let maior = parseFloat(prompt("Digite o lado maior"))
  let menor = parseFloat(prompt("Digite o lado menor"))
  let altura = parseFloat(prompt("Digite a altura"))
  return (maior + menor) * altura / 2
}
function circulo(){
  let raio = parseFloat(prompt("Digite o raio"))
  return 3.14 * (raio * raio)
}

do{
  resposta = parseFloat(prompt("1 - triangulo\n"
                              +"2 - retangulo\n"
                              +"3 - quadrado\n"
                              +"4 - trapezio\n"
                              +"5 - circulo\n\n"
                              +"6 - SAIR"))
  switch(resposta){
    case 1:
      alert(triangulo())
      break
    case 2:
      alert(retangulo())
      break
    case 3:
      alert(quadrado())
      break
    case 4:
      alert(trapezio())
      break
    case 5:
      alert(circulo())
      break
    case 6:
      alert("Saindo....")
      break
    default:
      alert("opcao invalida")
  }
}while(resposta != 6)