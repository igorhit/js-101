/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    jsimp = capitalInicial + capitalInicial * taxaJuros * tempoAplicacao
    return jsimp
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    jcomp = capitalInicial + capitalInicial * ((1 + taxaJuros) ** tempoAplicacao)  
    return jcomp
}

jurosSimples(1000, 0.1, 12)
console.log(`Juros Simples = R$${jsimp.toFixed(2)}`)
jurosCompostos(1000, 0.1, 12)
console.log(`Juros Compostos = R$${jcomp.toFixed(2)}`)