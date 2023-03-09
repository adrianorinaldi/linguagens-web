let valor = prompt("Digite um valor em metros")
const conversão = prompt("Qual conversão deseja fazer?"
                          + "\n mm - milimetros"
                          + "\n cm - centimetros"
                          + "\n dm - decimetros"
                          + "\n dam - Decâmetro"
                          + "\n hm - Hectômetro "
                          + "\n km - Quilometros")

switch (conversão){
  case "mm":
    alert("mm = " + (parseFloat(valor) * 1000))
    break
  case "cm":
    alert("cm = " + (parseFloat(valor) * 100))
    break
  case "dm":
    alert("dm = " + (parseFloat(valor) * 10))
    break
  case "dam":
    alert("dam = " + (parseFloat(valor) * 0.1))
    break
  case "hm":
    alert("hm = " + (parseFloat(valor) * 0.01))
    break
  case "km":
    alert("km = " + (parseFloat(valor) * 0.001))
    break
  default:
    alert("opcao invalida")
}