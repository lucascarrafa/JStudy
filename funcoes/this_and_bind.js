const pessoa ={
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

function Pessoa(){
    this.idade = 0
    setInterval(function(){ //temporizador ms
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

new Pessoa

function Pessoa2(){
    this.idade = 0
    const self = this
    setInterval(function(){ //temporizador ms
        self.idade++
        console.log(self.idade)
    },1000)
}

new Pessoa2