function soboanoticia(nota) {
    if(nota >= 7) {
        console.log('APROVADO com ' + nota)
    }
}

soboanoticia(8.1)
soboanoticia(6.1)

function seforverdadeeufalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seforverdadeeufalo()
seforverdadeeufalo(null)
seforverdadeeufalo(undefined)
seforverdadeeufalo(NaN)
seforverdadeeufalo('')
seforverdadeeufalo(0)
seforverdadeeufalo(-1)
seforverdadeeufalo(' ')
seforverdadeeufalo('?')
seforverdadeeufalo([])
seforverdadeeufalo([1, 2])
seforverdadeeufalo({})