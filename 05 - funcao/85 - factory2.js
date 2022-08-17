function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto10: 0.1 * preco
    }
}

console.log(criarProduto('sabonete', 2.49))