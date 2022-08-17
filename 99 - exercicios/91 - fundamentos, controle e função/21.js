/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

let taxa1 = 80
let taxa2 = 50 
let taxa3 = 95
let taxa4 = 130

function calculoMensalidade(idade, taxaFixa = 100) {
    if(idade < 10) {
        mensalidade = taxaFixa + taxa1
    } else if(idade < 30) {
        mensalidade = taxaFixa + taxa2
    } else if(idade < 60) {
        mensalidade = taxaFixa + taxa3
    } else {
        mensalidade = taxaFixa + taxa4
    } return mensalidade      
}

console.log(`R$${calculoMensalidade(9).toFixed(2).toString().replace('.', ',') }`)
console.log(`R$${calculoMensalidade(22).toFixed(2).toString().replace('.', ',') }`)
console.log(`R$${calculoMensalidade(33).toFixed(2).toString().replace('.', ',') }`)
console.log(`R$${calculoMensalidade(69).toFixed(2).toString().replace('.', ',') }`)
