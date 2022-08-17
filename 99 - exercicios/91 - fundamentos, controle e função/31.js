/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function negativos(numeros) {
    let negativos = 0
    let positivos = 0
    for(i in numeros) {
        if(numeros[i] < 0) {
            negativos++
        } else {
            positivos++
        }
    } console.log(`Dos ${numeros.length} números analisados, ${negativos} números são negativos. E ${positivos} números são positivos.`)
}
vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
negativos(vetor)