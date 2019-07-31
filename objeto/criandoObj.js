const obj1 = {} //literal
console.log(obj1)

const obj2 = new Object //Object em JS
console.log(obj2)

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoDesconto = _ => {
        return preco*(1-desc)
    }
}

const p1 = new Produto('Caneta',4,0.10)
console.log(p1.getPrecoDesconto())

function criarFuncionario(nome, salario, faltas){ //funcao factory
    return {
        nome,
        salario,
        faltas,
        getSalarioMes(){
            return (salario/30)*(30-faltas)
        }
    }
}

const padeiro = criarFuncionario('Jaqueline',2600,4)
console.log(padeiro)

//object.create
const filha = Object.create(null)
filha.nome = "Paula"
console.log(filha)

//JSON para objeto
const fromJSON = JSON.parse('{"server":"156.153.10.7"}')
console.log(fromJSON.server)