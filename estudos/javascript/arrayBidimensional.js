const arr=[
  "1 nivel",
  ["2 nivel",42,true],
  [
    ["3 nivel 1 item","3 nivel ola"],
    ["3 nivel 2 item","3 nivel opa"]
  ]
]

console.log(arr[0])
console.log(arr[1][1])
console.log(arr[2][0][0])

const matriz = [
  ["L0 C0", "L0 C1", "L0 C2", "L0 C3"],
  ["L1 C0", "L1 C1", "L1 C2", "L1 C3"],
  ["L2 C0", "L2 C1", "L2 C2", "L2 C3"],
]

////mostra no console em formato de tabela
console.table(matriz)

///adiciona uma nova linha
matriz.push("nova linha")

//adiciona uma nova coluna
matriz[0].push("nova coluna")

////iterar sobre a matriz
for(let i = 0; i < matriz.length;i++){
  for(let j=0; j < matriz[i].length; j++){
    const elemento = matriz[i][j]
    console.log(elemento)
  }
}