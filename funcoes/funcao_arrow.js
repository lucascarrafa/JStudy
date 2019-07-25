//----------------------------------------------------//
let dobro = function(a){
    return 2*a
}

dobro = (a)=>{
    return 2*a
}

dobro = a => 2*a
console.log(dobro(200))

//----------------------------------------------------//
let mostraNaTela = function(){
    return 'Lucas Carrafa'
}

mostraNaTela = () => 'Lucas Carrafa'
mostraNaTela = _ => 'Lucas Carrafa'
console.log(mostraNaTela())

//----------------------------------------------------//
function Pessoa(){
    this.idade = 0
    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa
//----------------------------------------------------//
console.log('this sem arrow')
const obj = {}
let comparaComThis = function(param){
    console.log(this===param)
}

comparaComThis(global)
comparaComThis(obj)

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log('this com arrow')
//arrow eh mais previsivel
let comparaComThisArrow = param => console.log(this===param) //ela foi definida dentro do modulo do node
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
comparaComThisArrow = comparaComThisArrow.bind(obj) //arrow eh mais forte que o bind, ele nao muda a referencia
