//ES15
const pessoa = {
    nome: 'Julia',
    idade: 16,
    endereco:{
        logadouro: 'Rua 9',
        numero: 176
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

const {nome: n,idade: i} = pessoa //atribuindo novas variaveis
console.log(n,i)

const {endereco:{logadouro,numero}} = pessoa
console.log(logadouro,numero)

//para ARRAY
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [,[,nota]] = [[,8,8], [9,6,8]]
console.log(nota)

function rand([min=0, max=1000]){
    if(min>max)[min,max] = [max,min]
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([,100]))
