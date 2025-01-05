const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter ((_, i) => {
    //primeiro aprametro sempre vai e referir a um objeto da array e o segundo o seu indice
     medias[i] < 7;
})
console.log (reprovados);