/* exercicio 2
escreva um programa em javascript que permita inserir o nome e a velocidade de dois veiculos
e exiba na tela uma mensagem dizendo qual dos dois é mais rapido*/

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
}