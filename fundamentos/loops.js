for(var i=0;i<5;i++){
    console.log(i)
}
console.log('i =',i)

for(let j=0;j<3;j++){
    console.log(j)
}
//console.log('j =',j) nao esta visivel

const funcs = []

for(var i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[5]()

const funcss = []

for(let i=0;i<10;i++){
    funcss.push(function(){
        console.log(i)
    })
}

funcss[2]()
funcss[5]()
