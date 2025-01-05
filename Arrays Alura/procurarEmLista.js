//tem que usar indexOf
//procurar aluno na lista 
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function ExibirNomeMedia (aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno)
        const ExibirMedia = lista[1][indice]
        console.log (`${aluno} está com média ${ExibirMedia}`)
    } else {
        console.log ('Esse aluno não está na lista')
    }
}

ExibirNomeMedia('Ana');
