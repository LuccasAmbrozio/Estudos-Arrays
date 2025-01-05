const notas = [10, 6, 7, 9]

somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
    //O valor da nota, sera adicionado ao vaor ja existente na variavel somaDasNotas
}

const media = somaDasNotas / notas.length
console.log (`A média final foi de ${media}`);