const aprovados = ['Karla','Isaque', 'Angela', 'Paloma', 'Mariane','Ana']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}-> ${nome}`)
})

const selecionaLetra = nome =>{
    if(nome[0] == 'A'){
        console.log(`Começam com a letra A: ${nome}`)
    }
}

aprovados.forEach(selecionaLetra)


Array.prototype.forEach2 = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}-> ${nome}`)
})