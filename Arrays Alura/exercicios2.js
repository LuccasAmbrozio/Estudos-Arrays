const nomes = ['Carol', 'Rogerio', 'Julia', 'Luccas']

for (const listaNomes of nomes) {
    console.log(listaNomes);
}



const frutas = ['Kiwi', 'Uva', 'Maçã', 'pera'];

function imprimir (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i, array[i]);
        
    }
}
console.log(imprimir(frutas))



const numeros = [1,2,3,4];

function soma (arr) {
    let somaDosNumeros = 0
    for (let i = 0; i < arr.length; i++) {
    somaDosNumeros += arr[i];
    }
    return somaDosNumeros
}

console.log(soma(numeros))



const arrMenoresMaiores = [5, 37, 18, 2, 59, 12, 1];

function imprimeMaiorEMenor(arr) {

  let maior = arrMenoresMaiores[0];
  let menor = arrMenoresMaiores[0];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores))



const numeros2 = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for (let i = 0; i < numeros.length; i++) {
    if (numeros2[i] %  2 === 0) {
    console.log(numeros2[i])
    }  
}



const notas = [7,9,6,5.5,7.5]
let somaDasNotas = 0    
for (let i = 0; i < notas.length; i++) {
     somaDasNotas += notas[i]
}
const media = somaDasNotas / notas.length
console.log(media)

