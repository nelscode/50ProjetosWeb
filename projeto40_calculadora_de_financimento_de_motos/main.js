// Capturando inputs
const preco_da_moto = document.querySelector('#preco_da_moto')
const entrada_da_moto = document.querySelector('#entrada_da_moto')
const quantidade_de_meses = document.querySelector('#quantidade_de_meses')
const juros_anual = document.querySelector('#juros_anual')

// Capturando elemento em que vamos colocar o resultado
const resultado = document.querySelector('#resultado')

// Colocando um evento de click no botão
const botaoCalcular = document.querySelector('#botaoCalcular').addEventListener('click', function(event){
    event.preventDefault() // evita que a página seja recarregada ao enviar o formulário

    // Capturando e convertendo todos os valores dos inputs para Number
    const precoValue = Number(preco_da_moto.value)
    const entradaValue = Number(entrada_da_moto.value)
    const quantidadeValue = Number(quantidade_de_meses.value)
    const jurosValue = Number(juros_anual.value)

    // Verificando se os valores digitados são menores que 0
    if(precoValue < 0 || entradaValue < 0 || quantidadeValue < 0 || jurosValue < 0){
        resultado.textContent = 'Por favor, preencha os campos corretamente!'
        return
    }

    // Pegando o valor da moto e subtraindo o valor de sua entrada
    const saldoFinanciado = precoValue - entradaValue

    // Verificando se o saldo financiado não foi menor que 0, ou seja, se a entrada que foi digitada é maior que o valor da moto
    if (saldoFinanciado <= 0){
        resultado.textContent = 'O valor da entrada deve ser menor do que o preço da moto!'
        return
    }

    // Basicamente, se o juros for 24% ele vai primeiro dividir 24 por 12 e depois por 100 o que vai ser 0.02
    const jurosMensal = jurosValue / 12 / 100
    // Calculo de juros compostos
    const parcela = (saldoFinanciado * jurosMensal) / (1 - Math.pow(1 + jurosMensal, -quantidadeValue));
    // Adicionando duas casas decimais depois da virgula
    const resultadoFinal = parcela.toFixed(2)

    // Exibindo
    resultado.textContent = `Valor da parcela: R$${resultadoFinal}`

})