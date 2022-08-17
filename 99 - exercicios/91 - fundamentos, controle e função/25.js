/*
Escrever um programa para exibir os números de 1 até 50 na tela
*/

function showNumeros(numFinal) {
    numInicial = 0
    while(numInicial < numFinal) {
        numInicial++
        console.log(`${numInicial}`)
    }
}
showNumeros(50)