let numero = parseFloat(prompt("Digite um número"))
let resultado = ""
for (let i = 1; i <= 20; i++){
  resultado += numero + " X " + i + " = " + (numero * i) + "\n"
}

alert("Tabuada de " + numero + ":\n" + resultado)

/*let palavra = prompt("Digite uma palavra")
let contrario = ""


  for(let i = palavra.length-1; i >= 0; i--){
      contrario += palavra[i]
  }


if (palavra === contrario){
  alert("palindrona="+"\n"+palavra+"\n"+contrario)
}else{
  alert("não é palindrona"+"\n"+palavra+"\n"+contrario)
}*/