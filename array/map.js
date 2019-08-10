const num = [1,2,3,4,5,6,7]

let num_ = num.map( e => {
    return 2*e
})

console.log(num, num_)

const soma = e => e+10
const triplo = e => e*3

let result = num.map(soma).map(triplo)

console.log(result)

const carrinho = [
    '{"nome":"Notebook", "preco":"3400"}',
    '{"nome":"Mochila", "preco":"149"}',
    '{"nome":"Monitor Dell", "preco":"750"}',
    '{"nome":"Mouse", "preco":"200"}',
]

let precos = carrinho.map(e =>{
    const {preco} = JSON.parse(e)
    return preco
})

console.log(precos)