//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,10)
imprimirSoma(4) //NaN

//funcao com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(2,8))
console.log(soma(2))

//armazenando uma funcao em uma variavel
const imprimirSoma2 = function(a, b){
    console.log(a + b)
}

imprimirSoma2(9,1)

//armazenando uma funcao arrow em uma variavel
const soma2 = (a,b) => {
    return a + b
}

console.log(soma2(1,3))

//retorno implicito
const divisao = (a,b) => a / b

console.log(divisao(3,10))