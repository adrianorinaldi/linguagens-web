///funcao simples sem parametro
/*function ola() {
  console.log("Ola mundo")
}

ola()*/

///funcao com um parametro
/*function dobro(x){
  alert(x * 2)
}

dobro(20)*/

/////quando não recebe valor 
//por parametro mostra o valor padrão "mundo"
/*function dizerOla(nome = "mundo"){
  alert("Ola "+ nome + " !")
}

dizerOla("Adriano")
dizerOla()*/

///funcao com dois parametros
/*function soma(a, b){
  alert("O resultado da soma é " + (a + b))
}

soma(2,3)
soma(4)*/

////declarar parametros opcionais sempre no final da assinatura
/*function criarUsuario(nome, email, senha, tipo = "admin"){
  const usuario = {
    nome : nome,
    email : email,
    senha : senha,
    tipo : tipo
  }

  console.log(usuario)
}

criarUsuario("Adriano", "adriano-rinaldi@hotmail.com", "12345")*/

///passando objeto como parametro
/*function objetoComoParametro(usuario){
  console.log(usuario.nome)
  console.log(usuario.telefone)
  console.log(usuario.email)
  //...
}

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email:"",
  senha:""
}

objetoComoParametro(dadosDoUsuario)*/

///funcao com retorno
function calcularMedia(a, b){
  const media = (a + b) / 2
  console.log(media)
  return media
}

const resultado = calcularMedia(4,6)

console.log(resultado)