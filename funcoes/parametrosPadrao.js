//estrategia 1 para gerar valor padrao
function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma(),soma(3),soma(1,4,5),soma(0,0,0))

//outras estrategias
function soma_new(a,b,c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //melhor opcao
    return a+b+c
}

console.log(soma_new(),soma_new(3),soma_new(1,4,5),soma_new(0,0,0))

