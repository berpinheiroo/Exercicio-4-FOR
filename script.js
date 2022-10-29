var n1
var n2
var pares = 0
var impares = 0

n1 = parseInt(prompt("Insira o primeiro número"))
n2 = parseInt(prompt("Insira o segundo número"))
if (n1 < n2) {
    for (n1 + 1; n1 < n2; n1++) {

        if (n1 % 2 == 0) {
            pares++
        } else {
            impares++
        }

    }
} else {
    for (n2 + 1; n2 < n1; n2++) {
        if (n2 % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
}

console.log("Neste intervalo há:", pares, "números pares e", impares, "números ímpares")