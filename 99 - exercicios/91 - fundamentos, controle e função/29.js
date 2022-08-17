/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function entre10e20(numeros) {
    let dentro = 0
    let fora = 0
    for(i in numeros) {
        if(numeros[i] >= 10 && numeros[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    } console.log(`Dos ${numeros.length} números analisados, ${dentro} números estão entre 10 e 20. E ${fora} números estão fora.`)
}
vetor = [1, 2, 4, 5, 7, 8, 12, 15, 22, 33]
entre10e20(vetor)