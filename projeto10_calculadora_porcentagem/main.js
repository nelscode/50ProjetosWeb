// função que calcula a porcentagem
const calc = (porcentagem, valorConta) => {
    return (porcentagem * valorConta) / 100
}

// entradas
let totalConta = Number(prompt('Qual o valor da sua conta?'))
let porcentagemGorgeta = Number(prompt('Quantos porcento de gorgeta deseja pagar?'))

// Processamento e saídas
if (isNaN(totalConta) || isNaN(porcentagemGorgeta)){
    alert('Digite o valor da conta e porcentagem em números! Tente novamente.')

} else {
    resultado = totalConta + calc(porcentagemGorgeta, totalConta)   
    alert(`O total da conta + gorgeta é de: R$${resultado.toFixed(2)}`)
}