console.log(typeof Array, typeof new Array)

let aprovados = new Array('Lucas','Jennifer','Carlos','Ana')
console.log(aprovados)

aprovados = ['Lucas','Jennifer','Carlos','Ana']
console.log(aprovados)

aprovados.push('Carla')
console.log(aprovados)
console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)

delete aprovados[4]
console.log(aprovados)

aprovados.splice(4,1) //exclui no indice 4 apenas 1 item
console.log(aprovados)