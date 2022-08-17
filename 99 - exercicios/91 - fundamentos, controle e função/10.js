/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function div3 (num) {
    if(num % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(div3(9))
console.log(div3(15))
console.log(div3(16))
console.log(div3(19))
console.log(div3(27))