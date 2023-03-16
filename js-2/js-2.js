function sum(argumentos) {
    let suma = 0;
    for (let i = 0; i < argumentos.length; i++) {
        suma = suma +argumentos[i]
    }
    return suma
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

function max(params) {
    let max = Number.NEGATIVE_INFINITY
    params.forEach(element => {
        if (element > max ) {
            max = element
        }
    });
    return max
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined


function maxIndex(params) {
    let max = Number.NEGATIVE_INFINITY
    params.forEach(element => {
        if (element > max ) {
            max = element
        }
    });
    return params.indexOf(max)
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

function join(arreglo) {
    let cadena = ''
    arreglo.forEach(element => {
        cadena = cadena + ' ' + element
    });

    return cadena
}

console.log(join([1, "adfdsaf",45]))
