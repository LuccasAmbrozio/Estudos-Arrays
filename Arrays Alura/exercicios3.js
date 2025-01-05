/*const meuArray = ['a', 'b', 'c', 'd', 'e'];

meuArray.forEach((elemento, indice) => {
  console.log(`Índice: ${indice}, Valor: ${elemento}`);
});

const listaDeNumero = [4,5,6,7,8];

function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback)
}

function dobro (num) {
     return num*2
}

const resultadoDaOperacao = executaOperacaoEmArray(listaDeNumero, dobro)

console.log(resultadoDaOperacao)


//ouuuu


const listaDeNumeros = [4,5,6,7,8];
const dobroDaLista = listaDeNumeros.map((num) => num*2);

console.log(dobroDaLista)

const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);

const nomesTurmaA = ['João Silva','Maria Santos','Pedro Almeida'];
  
  const nomesTurmaB = [ 'Carlos Oliveira','Ana Souza','Lucas Fernandes'];

  const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)

  const alunoEspecifico = todasAsTurmas.find(nome => nome === 'Lucas Fernandes')

  if (alunoEspecifico) {
    console.log (`Àluno ${alunoEspecifico} encontrado`)
  } else {
    console.log ('Aluno não encontrado')
  }*/

    const numeros = [6, 9, 12, 15, 18, 21];
    const triplicados = numeros.forEach(numero => {
        const resultado = numero * 3
        console.log(`O número ${numero} multiplicado por 3 é igual a ${resultado}`);
    })
    
    const encontrarIndice = numeros.findIndex(numero => numero ===18)
    console.log(`O índice do número 18 é ${encontrarIndice}`);
     
    
  


