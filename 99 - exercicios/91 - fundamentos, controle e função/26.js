/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function showPares(num) {
    contador = 0
    while(contador < num) {
        contador += 2
        console.log(contador)
    }
}
showPares(100)