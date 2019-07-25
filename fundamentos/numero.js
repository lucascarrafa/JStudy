const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao = 8.34323
const trabalho = 4.23213

const total = avaliacao*peso1 + trabalho*peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(3)) //define quantos numeros depois da virgula
console.log(Number.isInteger())
let media_string = media.toString() //converte numero em string
console.log(typeof media_string)