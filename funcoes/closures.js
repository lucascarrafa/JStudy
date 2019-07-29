//closure é o escopo criado quando uma função é declarada
//permite a função acessar e manipular variaveis externas a funcao

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro()
}

const minhaFuncao = fora()

console.log(minhaFuncao)