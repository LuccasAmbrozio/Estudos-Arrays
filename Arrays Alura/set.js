const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

const novaListaNomes = new Set(nomes)
console.log(novaListaNomes)
//mas assim eu não posso atribuir nada na array, como pop, push, reduce
const listaNomes = [...new Set(nomes)]
console.log (listaNomes)