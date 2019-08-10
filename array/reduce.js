const alunos = [
    {nome: 'João', nota: 8.9, bolsista: false},
    {nome: 'Julia', nota: 8.6, bolsista: false},
    {nome: 'Karina', nota: 7.9, bolsista: true},
    {nome: 'Jonas', nota: 5.9, bolsista: false},
    {nome: 'John', nota: 3.9, bolsista: true},
    {nome: 'Arya', nota: 9.9, bolsista: true},
    {nome: 'Eduarda', nota: 9.3, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce((acumulador,atual) => {
    return acumulador+atual
}/*,10 pode passar um valor inicial*/)

console.log(resultado)