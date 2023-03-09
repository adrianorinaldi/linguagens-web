/*EXERCICIO 1

let nome
let sobrenome
let campo_de_estudo
let ano_de_nascimento

nome = window.prompt("Digite seu nome:")
sobrenome = window.prompt("Digite seu sobrenome:")
campo_de_estudo = window.prompt("Digite seu campo de estudo:")
ano_de_nascimento = window.prompt("Digite seu ano de nascimento:")

console.log("nome completo="+nome+" "+sobrenome)
console.log("campo de estudo="+campo_de_estudo)
console.log("Idade="+(2023-ano_de_nascimento))

alert{
  "nome completo="+nome+" "+sobrenome + "campo de estudo="+campo_de_estudo + "Idade="+(2023-ano_de_nascimento)
}*/
/*
let num1
let num2
let num3

num1 = window.prompt("Digite um numero")
num2 = window.prompt("Digite outro numero")

num3 = parseFloat(num1)+parseFloat(num2)

console.log("Soma="+num3)
console.log("Subtracao="+(num1-num2))
console.log("Multiplicacao="+(num1*num2))
console.log("Divisao="+(num1/num2))*/

/**
 * ifs
 */
/*
const idade = prompt("informe sua idade")

if (idade > 18) {
  alert("vc é maior de idade")
} else {
  alert("vc é menor de idade")
}

const resultado = (4 === 4) ? "correto" : "errado"
alert(resultado)*/

/* exercicio 2
escreva um programa em javascript que permita inserir o nome e a velocidade de dois veiculos
e exiba na tela uma mensagem dizendo qual dos dois é mais rapido*/
/*
let nome_carro1 = prompt("Qual o nome do carro1")
let velocidade_carro1 = prompt("Qual a velocidade do carro1")
let nome_carro2 = prompt("Qual o nome do carro2")
let velocidade_carro2 = prompt("Qual a velocidade do carro2")

if (parseFloat(velocidade_carro1) > parseFloat(velocidade_carro2)){
  alert("Carro " + nome_carro1 + " é mais veloz")
}else if(parseFloat(velocidade_carro2) > parseFloat(velocidade_carro1)){
  alert("Carro "+ nome_carro2 + " é mais veloz")
}else{
  alert("deu empate")
}*/
/*
const nome1 = prompt("nome1")
const poder_ataque1 = prompt("Poder de ataque1")
const nome2 = prompt("nome2")
let qtd_vida2 = prompt("Pontos de vida2")
const poder_defesa2 = prompt("Poder de defesa2")
const escudo = prompt("possui escudo? S/N")

let qtd_dano

if (poder_ataque1 > poder_defesa2 && escudo === "N"){
  qtd_dano = poder_ataque1 - poder_defesa2
  alert("dano "+(poder_ataque1 - poder_defesa2))
}else if(poder_ataque1 > poder_defesa2 && escudo === "S"){
  qtd_dano = (poder_ataque1 - poder_defesa2)/2
  alert("dano "+((poder_ataque1 - poder_defesa2)/2))
}else if(poder_ataque1 < poder_defesa2){
  alert("dano 0")
}

qtd_vida2 -= qtd_dano

alert(
  "Dano " + qtd_dano + 
  "\nVida " + qtd_vida2
)
*/


///////switch/////////
/*
const resultado = prompt("escolha uma alternativa\na\nb\nc")

switch (resultado){
  case "a":
    alert("a")
    break
  case "b":
    alert("b")
    break
  case "c":
    alert("c")
    break
  default:
    alert("padrao")
}*/
/////exercicio
/*
let valor = prompt("Digite um valor em metros")
const conversão = prompt("Qual conversão fazer")

switch (conversão){
  case "mm":
    alert("mm" + (parseFloat(valor) * 1000))
    break
  case "cm":
    alert("cm" + (parseFloat(valor) * 100))
    break
  case "dm":
    alert("dm" + (parseFloat(valor) * 10))
    break
  case "dam":
    alert("dam" + (parseFloat(valor) * 0.1))
    break
  case "hm":
    alert("hm" + (parseFloat(valor) * 0.01))
    break
  case "km":
    alert("km" + (parseFloat(valor) * 0.001))
    break
  default:
    alert("opcao invalida")
}*/

////////////while/////////////////////////
/*let velocidade = 80

while (velocidade > 0){
  console.log(velocidade)
  velocidade --

  if(velocidade == 7){
    break
  }
}*/

////exercicio
/*let visitou = prompt("visitou?")
let qtd = 0
let cidade


while (visitou == "S"){
  if(qtd == 0){
    cidade = prompt("qual cidade")
    qtd++
  }else{
    visitou = prompt("visitou?")
    if(visitou == "S"){
      cidade +=", " + prompt("qual cidade")
      qtd++
    }
  }
}

alert("qtd " + qtd)
alert("cidades "+ cidade)*/

///////////////do-while////////////////
/*let velocidade = 0

do {
  alert("A velocidade do veiculo é " + velocidade + " km/h")
  velocidade -= 20
} while (velocidade > 0)

alert("Velocidade final: " + velocidade + " km/h")*/

///exercicio 1
/*let opcao = ""

do{
  opcao = prompt("seja vem vindo"
  + "\n 1 - opcao1"
  + "\n 2 - opcao2"
  + "\n 3 - opcao3"
  + "\n 4 - opcao4"
  + "\n 5 - opcao5")

  alert("Opcao " + opcao)
}while (opcao !== "5")*/

/////exercicio 2
/*let saldo = prompt("informe a quantidade de dinheiro inicial")
saldo = parseFloat(saldo)
let opcao = ""

do{
  opcao = prompt("SALdo disponivel:"+ saldo + "\n1 - Adicionar dinheiro \n2- Reover dinheiro \n3- Sair")

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
} while(opcao !== "3")*/

//////////for////////////
/*let nome = "Adriano"
for (let i = 0; i < nome.length; i++){
  console.log(nome[i])
}*/