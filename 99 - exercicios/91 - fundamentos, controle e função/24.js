/*
Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while
*/

function helloWorld(qtvezes) {
    vezes = 0
    while(vezes < qtvezes) {
        vezes++
        console.log(`${vezes} - Hello World!`)
    }
}
helloWorld(11)