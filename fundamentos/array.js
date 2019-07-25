const valores = [7.3,5,9,12,345,1.9,45,23,5,9]
console.log(valores[0],valores[4])

valores[10] = 73 //add o valor na posicao 10
console.log(valores)
console.log(valores.length) //tamanho do array

valores.push({id: 3},1000,null,'lucas carrafa') //add no elemento
delete valores[4] //exclui o elemento do array na posicao
console.log(valores.pop()) //exclui o ultimo elemento do array
console.log(valores)