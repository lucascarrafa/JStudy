function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com '+nota)
    }else{
        console.log('Que pena :(')
    }
}

soBoaNoticia(7)
soBoaNoticia(6.99)

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Excelente aluno')
    }else if(nota.entre(7,8)){
        console.log('Bom aluno')
    }
}

imprimirResultado(8)

const imprimirResultado_two = function(nota){
    switch(Math.ceil(nota)){
        case 10:
        case 9:
            console.log('Excelente aluno')
            break
        default:
            console.log('Nota invalida')
    }
}

imprimirResultado_two(10)
imprimirResultado_two(8.9)


function getInteiroAleatorioEntre(min,max){
    const valor =Math.random()*(max-min)+min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcão escolhida foi ${opcao}.`)
}

let count = 1
for(;count<=10;count++){
    console.log(`contador está em -> ${count}`)
}

const ips = ['10.0.0.1','10.0.0.2','10.0.0.3','10.0.0.4','10.0.0.5','10.0.0.6']
for(let i=0;i<ips.length;i++){
    console.log(ips[i])
}

for(let j in ips){
    console.log('IPs de acesso: ',ips[j])
}
