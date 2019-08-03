console.log(typeof String)
console.log(typeof Array)
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Uni 3'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([198,34,5,82].first())