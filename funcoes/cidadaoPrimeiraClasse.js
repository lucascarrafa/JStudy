//criar de forma literal
function fun_1(){}

//armazenar em uma variavel
const fun_2 = function(){}

//armazenar em um array
const array = [function(a, b){return a+b},fun_1,fun_2]
console.log(array[0](23,7))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Teste'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}

run(fun_2)

//uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const aux = soma(2,3)
aux(4)