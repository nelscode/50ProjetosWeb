const botaoVerificar = document.getElementById('botaoVerificar').addEventListener('click', function(event){
    event.preventDefault()

    let principal = document.getElementById('principal')
    let resultado = document.getElementById('resultado')

    let primeiroNumero = document.getElementById('primeiroNumero').value
    let segundoNumero = document.getElementById('segundoNumero').value

    let primeiroNumeroConvertido = Number(primeiroNumero)
    let segundoNumeroConvertido = Number(segundoNumero)

    let maiorNumero
    let calc = primeiroNumeroConvertido > segundoNumeroConvertido ? maiorNumero = primeiroNumeroConvertido : maiorNumero = segundoNumeroConvertido

    if(!resultado){
        let resultado = document.createElement('p')
        resultado.id = 'resultado'
        principal.appendChild(resultado)
    }

    resultado.innerHTML = `O maior número é ${maiorNumero}`
})