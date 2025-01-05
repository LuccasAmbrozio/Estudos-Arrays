function concatenando(array1, array2) {
    return array1.concat(array2)
}
const array1 = ['leo', 'tome', 'bruno'];
const array2 = ['gustavo', 'murillo', 'davi']
console.log (concatenando(array1, array2))

const menuPrincipal = ['macarrão', 'camarão', 'bife'];
const menuDeSobremesa = ['sorvete', 'petit gateau', 'creme de papaya'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesa);
console.log(menuCompleto);