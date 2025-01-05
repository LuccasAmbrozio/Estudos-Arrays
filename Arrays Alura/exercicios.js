/*const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]

function juntandoArrays (...arrays) {
    return [].concat(...arrays)
}
console.log(juntandoArrays(arr1, arr2, arr3));

const valores = [7, 8, 4, 5]
const soma = 0
const somaDosNumeros = valores.reduce ((a, v) => a + v, 0 )

console.log (somaDosNumeros)



const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const uniao = [...new Set ([...coresLista1, ...coresLista2])]

console.log(uniao);



const num = [2,4,5,7,8]

const pares = num.filter((n, _) => n % 2 === 0)

console.log (pares)



const num = [6,4,8,9,15,16]

function filtrar(arr) {
return arr.filter(n => n % 3 === 0 && n > 5)

}
console.log(filtrar(num));*/



const num = [6, 17, 54, 23, 19];

function soma (arr) {
 return num.reduce((a, n) => n + a, 0)
}
console.log(soma(num));




