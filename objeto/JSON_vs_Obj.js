const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a+b+c
    }
}

console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1,"b":4,"c":8}'))
const obj2 = JSON.parse('{"a":1,"b":4,"c":8}')
console.log(obj2.a)