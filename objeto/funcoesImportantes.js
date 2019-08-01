const servidor = {
    regiao: 'br',
    status: 'on',
    ip: '187.135.45.32',
    ram: 1024,
    cpu: 2,
    disk: 1000
}


console.log(Object.keys(servidor)) //retorna as chaves
console.log(Object.values(servidor)) //retorna os valores
console.log(Object.entries(servidor)) //retorna um array de chave-valor


Object.defineProperty(servidor,'SO',{
    enumerable: true, //passiva de ser listada
    writable: false, //aceita modificacao
    value: 'cento-os'
})


servidor.SO = 'ubuntu-os'
Object.entries(servidor).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

const user = {
    nome: 'Lucas Carrafa',
    email: 'lucas@lucas.com',
    fatura: 350
}

const ambiente_dev = Object.assign(servidor,user) //faz a concatenacao dos objetos

Object.entries(ambiente_dev).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.freeze(ambiente_dev)
ambiente_dev.regiao = 'us'
console.log(ambiente_dev)