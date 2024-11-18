const botaoVerificar = document.getElementById('botaoVerificar').addEventListener('click', function(event){
    event.preventDefault()

    let numeroInicial = document.getElementById('numeroInicial').value
    let numeroFinal = document.getElementById('numeroFinal').value

    let principal = document.getElementById('principal')
    let resultado = document.getElementById('resultado')

    let numeroInicialConvertido = Math.round(numeroInicial)
    let numeroFinalConvertido = Math.round(numeroFinal)

    let listaDeNumerosTotais = []

    let i = numeroInicialConvertido
    while (i <= numeroFinalConvertido){
        listaDeNumerosTotais.push(i)
        i++
    }

    let listaDeNumerosPares = listaDeNumerosTotais.filter(function(number){
        return number % 2 === 0   
    }).join(', ')

    if(!resultado){
        let resultado = document.createElement('p')
        resultado.id = 'resultado'
        principal.appendChild(resultado)    
    }

    resultado.innerHTML = `Resultado: <br> ${listaDeNumerosPares}`
})