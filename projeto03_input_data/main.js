let firstName = prompt('Digite seu nome: ') // prompt é uma função (sequencia de códigos previamente criada)
let secondName = prompt('Digite seu segundo nome: ')
let age = prompt('Digite sua idade: ')

// Exibindo os tipos de dados:
console.log('O tipo de dado do primeiro nome é: ', typeof firstName) // Usamos o "typeof para descobrir o tipo
console.log('O tipo de dado do segundo nome é: ', typeof secondName)
console.log('O tipo de dado da idade é: ', typeof age,', vamos converte-lo') // Tudo que entra pelo teclado é string

// Convertando age para number
age = Number(age) // Usamos number() para converter, também podemos usar parseInt() para converter em números inteiros ou parseFloat() para converter em números flutuantes/quebrados (Number tenta converter tudo)
console.log('Agora o tipo de dado da idade é: ', typeof age)

// Constantes - Valores que não podem ser alterados 
const calcSumSub = 3
const otherCalcs = 2

// testando calculos matemáticos apenas
    // O javascript faz coerção automatica de tipos, por isso, não era necessário converter age para número para esses calculos funcionassem
let calc = (age - calcSumSub) + calcSumSub  // ou  (age - 3) + 3 
let ageFather = age * otherCalcs // ou age * 2 
let ageMother = age - calcSumSub // ou ageFather - 3 
let myAgeDivisiblebyTwo = Math.trunc(age / otherCalcs) // ou Math.trunc(age / 2) // Retornando apenas valores inteiros (sem casas decimais)

// Exibindo valores
console.log(`Olá, eu me chamo ${firstName} ${secondName}.`)
console.log(`Eu tenho ${age} anos de idade.`)
console.log(`Meu pai tem ${ageFather} anos e minha mãe tem ${ageMother}.`)
console.log(`A dez anos atrás eu tinha ${myAgeDivisiblebyTwo} anos de idade.`)