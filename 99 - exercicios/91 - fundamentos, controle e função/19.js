/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100    Cachorro Quente      R$ 3,00
200    Hambúrguer Simples   R$ 4,00
300    Cheeseburguer        R$ 5,50
400    Bauru                R$ 7,50
500    Refrigerante         R$ 3,50
600    Suco                 R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function pedido(cod, qtd) {
    switch(cod) {
        case 100:
            return `Total de R$${(qtd * 3).toFixed(2).toString().replace('.', ',')} por ${qtd} Cachorro Quente`
        case 200:
            return `Total de R$${(qtd * 4).toFixed(2).toString().replace('.', ',')} por ${qtd} Hambúrguer Simples`
        case 300:
            return `Total de R$${(qtd * 5.5).toFixed(2).toString().replace('.', ',')} por ${qtd} Cheeseburguer`
        case 400:
            return `Total de R$${(qtd * 7.5).toFixed(2).toString().replace('.', ',')} por ${qtd} Bauru`
        case 500:
            return `Total de R$${(qtd * 3.5).toFixed(2).toString().replace('.', ',')} por ${qtd} Refrigerante`
        case 600:
            return `Total de R$${(qtd * 2.8).toFixed(2).toString().replace('.', ',')} por ${qtd} Suco`
        default:
            return 'Produto não cadastrado'
    }
}

console.log(pedido(100, 2))
console.log(pedido(200, 2))
console.log(pedido(300, 2))
console.log(pedido(400, 2))
console.log(pedido(500, 2))
console.log(pedido(600, 2))
console.log(pedido(700, 2))