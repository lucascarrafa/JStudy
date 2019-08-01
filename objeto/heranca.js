const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const jaguar = {
    modelo: 'f-type',
    velMax: 300
}

console.log(ferrari.__proto__) //procura o objeto pai
console.log(ferrari.__proto__ === Object.prototype)