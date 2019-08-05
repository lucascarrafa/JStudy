const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Gess') //add no inicio
console.log(pilotos)

pilotos.splice(2,0,'Bottas')
console.log(pilotos)

const algunsPilotos = pilotos.slice(3) //novo array
console.log(algunsPilotos)

const test_array = {
    0: 'Hitalo',
    1: 'Julia',
    2: 'Mayara',
    3: 'Cleison'
}
console.log(test_array)

Object.defineProperty(test_array, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(test_array.toString())