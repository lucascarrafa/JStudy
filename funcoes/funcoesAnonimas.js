const soma = function(x,y){
    return x + y

} 

const imprimirResultado = function (a,b,operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(9,1)
imprimirResultado(6,4,soma)
imprimirResultado(5,1, function(x,y){
    return x - y
})
imprimirResultado(5,2, (x,y) => x*y)