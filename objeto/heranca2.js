const pai = {nome: 'Jeremias', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key)?
        console.log(key) : console.log(`Por herança: ${key}`)
}

function meuObj(){}

const obj1 = new meuObj
meuObj.prototype.nome = 'Joaquim'
meuObj.prototype.falar = function() {
    console.log(`Vamos ver isso ${this.nome}`)
}

obj1.falar()