function suma(positvo) {
    let sum = 0
    for (let i = 0; i <= positvo; i++) {
        sum = sum + i
    }
    return sum
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(15)) // 120
