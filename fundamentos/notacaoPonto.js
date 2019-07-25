function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log(nome)
    }
}

const obj = new Obj('Notebook')

console.log(obj.nome)
obj.exec()