function tratarErro(erro){
    //throw new Error('...')
    throw 10
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('Finish')
    }
    
}

const obj = {name: 'Roberto'}
imprimirNome(obj)