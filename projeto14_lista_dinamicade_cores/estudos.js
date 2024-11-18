// trim
let nome = '         v    '  // string com espaços no começo e no fim
console.log(nome) // exibindo e mostrando espaços
console.log(nome.trim()) // usando o método trim() para remover os espaços

// Podemos usa-lo para verificar se a string é vazia
let stringVazia = "" // essa string é vazia
console.log(stringVazia.trim() === "") // resultado é true
console.log(stringVazia === ' ') // resultado é false (a string não possui nenhum espaço)

// /[\d]/ - Usamos essa expressão para verificar se uma string possui algum digito de 0 a 9 inserido nela (aliamos ela com o .test() para fazer a verificação)
let stringNumero = 'Nelson1234'
let stringSemNumero = 'Nelson'
console.log(/[\d]/.test(stringNumero)) // vai dar true, existe numero dentro da stringNumero
console.log(/[\d]/.test(stringSemNumero)) // vai dar false, não existe um número dentro da stringSemNumero
// Se tiver, true, se não tiver, false

// for loop 
// o i começa com valor 0, e enquanto o i for menor ou igual a 10 ele vai somar +1 ao valor dele a cada giro do loop
for (i = 0; i <= 10; i++){
    console.log(`${i}. Olá Mundo`) // exibira isso no console a cada giro do loop
}


// do... while (faça... enquanto)
let x = 0

do { // faça
    x++
    console.log(x) // e vai mostrar no console cada incrementação

} while (x <= 9) // enquanto
// o x vai incrementar 1 enquanto o valor dele vor menor ou igual a 9