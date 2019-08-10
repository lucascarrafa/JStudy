const produtos = [
    {nome: 'iPad', preco: 2500, fragil: true},
    {nome: 'Livro', preco: 100, fragil: false},
    {nome: 'TV', preco: 2500, fragil: true},
    {nome: 'Vinho', preco: 5630, fragil: true},
    {nome: 'Fogao', preco: 800, fragil: true},
]

console.log(produtos.filter(p => {
    if(p.preco > 2000 && p.fragil == true){
        return true
    }else{
        return false
    }
}))