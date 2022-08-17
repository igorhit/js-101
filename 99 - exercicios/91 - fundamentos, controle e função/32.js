/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function mediaAritmetica(numeros) {
    soma = 0
    for(i in numeros) {
        soma += numeros[i]
    } 
    media = soma / numeros.length
    console.log(`A média dos números analisados é ${media}.`)
}
vetor = [1, 2, 3, 4, 5]
mediaAritmetica(vetor)