const notas = [10, 9.5, 8, 7, 6]
let somaDasNotas = 0

notas.forEach(nota => {
 somaDasNotas += nota
})

const media = somaDasNotas / notas.length

console.log(`A média do aluno é ${media}`);