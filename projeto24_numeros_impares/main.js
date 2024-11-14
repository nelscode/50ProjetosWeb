const botaoVerificar = document.getElementById('botaoVerificar').addEventListener('click', function(event){
    
    event.preventDefault()

    let principal = document.getElementById('principal')
    let resultado = document.getElementById('resultado')

    let numeroInicial = document.getElementById('numeroInicial').value
    let numeroFinal = document.getElementById('numeroFinal').value

    let numeroInicialConvertido = Number(numeroInicial)
    let numeroFinalConvertido = Number(numeroFinal)

    let listaDeNumerosCompleta = [numeroInicialConvertido]
    let completadorDaLista = numeroInicialConvertido;

    do {
        completadorDaLista++
        listaDeNumerosCompleta.push(completadorDaLista)

    } while (completadorDaLista < numeroFinalConvertido)

    let listaDeNumerosImpares = listaDeNumerosCompleta.filter(function(number){
        return number % 2 != 0
    }).join(', ')

    if(!resultado){
        let resultado = document.createElement('p')
        resultado.id = 'resultado'
        principal.appendChild(resultado)
    }

    resultado.innerHTML = `Resultado ${listaDeNumerosImpares}`

})