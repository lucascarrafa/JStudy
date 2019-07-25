const escola = "lucas34"

console.log(escola.charAt(4)) //retorna a letra na posicao

console.log(escola.charCodeAt(4)) //retorna o valor na tabela UNICODE na posicao 4

console.log(escola.indexOf('l')) //retorna a posicao que a letra l esta na string

console.log(escola.substring(1)) //imprime da posicao 1 pra frente
console.log(escola.substring(1,3)) 

console.log('Olá'.concat(escola).concat("!")) //concatena
console.log('Olá '+escola+" !")

console.log(escola.replace('l','L')) //substitui a letra l por L 
console.log(escola.replace(/\d/g,'')) //replace usando regex

console.log('Pedro,Joana,Iara,Luana,Filipe'.split(',')) //gera um array
console.log('Pedro,Joana,Iara,Luana,Filipe'.split(/,/)) //usando regex