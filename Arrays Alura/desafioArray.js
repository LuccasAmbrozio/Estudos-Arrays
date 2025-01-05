//fazer tres linhas para que faça um quadrado 3x3 com numeros de 1 a 9

const linha1 = [1];
const linha2 = [4];
const linha3 = [7];
const primeiraArray = [linha1 , linha2, linha3];
//console.log (primeiraArray)

const linha4 = [2];
const linha5 = [5];
const linha6 = [8];
const segundaArray = [linha4 , linha5, linha6];
//console.log (segundaArray)

const linha7 = [3];
const linha8 = [6];
const linha9 = [9];
const terceiraArray = [linha7 , linha8, linha9];
//console.log (terceiraArray)

terceiraArray.splice(1,1,[15]);

const matriz = [primeiraArray, segundaArray, terceiraArray];


console.log (matriz);
//console.log (terceiraArray[1])

