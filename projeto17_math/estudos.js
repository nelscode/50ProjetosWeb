// Objeto Math (objeto estático) - Funcionalidades Matemáticas

// encontrando valor de PI
console.log(Math.PI); 

// Arredonando números para o número inteiro mais próximo
let x = 2.5
console.log(Math.round(x)) // vai arredondar para 3

x = 2.4 // aqui o valor inteiro mais próximo é 2
console.log(Math.round(x)) // arrendondando para 2

// Arredondando para baixo (floor)
let y = 2.5 // arredonda para 2
console.log(Math.floor(y))

// Arredondando para cima (ceil)
y = 2.5 // vai para 3
console.log(Math.ceil(y))

// Retornando o menor valor e o máximo valor fornecido
let min = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9) // retorna 1 - minimo
let max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9) // retorna 9 - maximo
console.log(min, max)

// Exponencial
let expo = Math.pow(2, 10) // é o mesmo que 2 elevado a 10
console.log(expo)

// Descobrindo raiz quadrada 
let raiz = Math.sqrt(16) // 4
console.log(raiz)

// Escolhendo um número aleátorio entre 0 e 1
console.log(Math.random()) // o numero sai quebrado
// aumentando a randomização para 0 e 9
console.log(Math.random() * 10) // o numero sai quebrado
// aumentando a rondomização para 0 e 19
console.log(Math.random() * 20)
// o resultado sempre vai ser maior que 0 e menor do que 1 ou 10 ou 20

// Resolvendo o problema do numero quebrado
console.log(Math.round(Math.random() * 10)) // o número que sair sempre vai ser próximo ao inteiro mais próximo
console.log(Math.floor(Math.random() * 10)) // se desejarmos arrendonar o resultado para baixo
console.log(Math.ceil(Math.random() * 10)) // se desejarmos arrendonar o resultado para cima
// todos os exemplos acima sempre vão ter resultados acima de 0 e abaixo de 10 (se quiseremos até 10, teremos que por 11)