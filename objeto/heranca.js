const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const jaguar = {
    modelo: 'f-type',
    velMax: 300,
    status(){
        return `${this.modelo}: esta ${super.status()}`
    }
}

console.log(ferrari.__proto__) //procura o objeto pai
console.log(ferrari.__proto__ === Object.prototype)

//cadeia de prototipo

const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual+delta <=this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

Object.setPrototypeOf(jaguar,carro)
console.log(jaguar)
jaguar.acelerarMais(380)
console.log(jaguar.status())