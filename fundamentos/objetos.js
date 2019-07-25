const prod_1 = {}
prod_1.nome = 'Samsung Galaxy A50'
prod_1.preco = 1670.00
prod_1.categoria = 'Telefone Celular'
prod_1['Desconto novo cliente'] = 0.30  //evitar atributos com espaco

const prod_2 = {
    nome : 'TV Sony',
    polegadas : 42,
    preco : 1999.90
}

console.log(`produto: ${prod_1.nome}`)
console.log(prod_2)