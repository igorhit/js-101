/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function paresEImpares(numeros) {
    for(i in numeros) {
        if(numeros[i] % 2 == 0) {
            console.log(`${numeros[i]} é par`)
        } else {
            console.log(`${numeros[i]} é ímpar`)
        }
    }
}
vetor = [1, 2, 4, 5, 7, 8, 12, 15, 22, 33]
paresEImpares(vetor)