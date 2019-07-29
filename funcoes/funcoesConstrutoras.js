function Carro(velocidademax =200, delta = 5){

    //atributo privado
    let velAtual = 0

    //metodo publido
    this.acelerar = function(){
        if(velAtual+delta <= velocidademax){
            velAtual += delta
        }else{
            velAtual = velocidademax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = _ => velAtual
}
 
const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const jaguar = new Carro(270,20)
jaguar.acelerar()
console.log(jaguar.getVelocidadeAtual())