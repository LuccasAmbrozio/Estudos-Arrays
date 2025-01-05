const notas = [7, 7, 8, 9]

const novaListaNotas = notas
novaListaNotas.push (10)
console.log (notas, novaListaNotas)
//as duas são um unico espaço na memória, então se eu alterar uma, as duas serão alteradas

const ListaNotas = [...notas, 10]
console.log (notas,ListaNotas)
//agora, novaListaNotas é igual a 7,7,8,9,10 e notas continua 7,7,8,9.