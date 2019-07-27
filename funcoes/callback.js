const fabricantes = ["Ford","GM","Volvo","Troller"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))


const notas = [1.3,6.7,4.8,8.7,7.7,6.9,7.0,10,5.5,7.5,7.3]

const notasBaixas = notas.filter(function(valor){
    if(valor<7){
        return true
    }
})

console.log(notasBaixas)

const notasBaixas_arrow = notas.filter(valor => valor < 7)

console.log(notasBaixas_arrow)