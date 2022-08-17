/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

let juros = 0.05

function calculoAnuidade(mesPgt, anuidade) {
    if(mesPgt > 12) {
        return 'Mês inválido'
    } else {
        for(let mes = mesPgt; mes <= 12; mes++) {
            return anuidadeCorrigida = anuidade + anuidade * (juros * (mes - 1))
        }
    }
}

console.log(calculoAnuidade(11, 1000))
console.log(calculoAnuidade(16, 1000))