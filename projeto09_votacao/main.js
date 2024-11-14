let idade = Number(prompt('Qual a sua idade: ')) // recebendo valor convertido para number

if (isNaN(idade)){
    alert('Digite uma idade!')
    alert('Tente novamente') // verificando se foi digitado um número
}

let titulo = prompt('Você possui titulo de eleitor? (s/n)').toUpperCase() // recebendo s ou n e convertendo para letras maiusculas

if (titulo != 'S' && titulo != 'N'){
    alert('Digite apenas s ou n')
    alert('Tente novamente') // verificando se foram digitados s ou n
} 

// Constante de idade
const idadeMinima = 18

// Processamento (verificando qual condição abaixo é true)
if (idade >= idadeMinima && titulo == 'S'){
    alert('Você já pode voltar!')
} else if (idade >= idadeMinima && titulo == 'N'){
    alert('Apesar de ter idade para votar, você ainda precisa do título de eleitor!')
} else if (idade < idadeMinima && titulo == 'S'){
    alert('Como você conseguiu o seu titulo? VOCÊ NÃO PODE VOTAR')
} else if (idade < idadeMinima && titulo == 'N') {
    alert('Aguarde mais uns anos para poder votar!') 
}