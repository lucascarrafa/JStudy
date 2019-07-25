const nome = 'Rebeca'
const concatenacao = 'Olá '+nome+' !'
const template = `Olá ${nome}!` 

console.log(template)

console.log(`1 + 1 = ${1 + 1}`) //expressoes

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
console.log(`Ei... ${up(nome)}!`)  