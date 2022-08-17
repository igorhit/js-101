// estratégia 1 para gerar valor padrão
console.log('estratégia 1')
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0)) // 0 retorna como false

// estratégia 2, 3 e 4 para gerar valor padrão
console.log('estratégia 2, 3 e 4')
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

// valor padrão es2015
console.log('valor padrão es2015')
function soma2(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))