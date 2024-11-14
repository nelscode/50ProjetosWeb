const botaoVerificar = document.getElementById('botaoVerificar').addEventListener('click', function(event){
    event.preventDefault()

    let principal = document.getElementById('principal')
    let resultado = document.getElementById('resultado')

    let entradaNumero = document.getElementById('entradaNumero').value
    let entradaNumeroConvertido = Math.round(entradaNumero)

    
    if(entradaNumeroConvertido < 1 || entradaNumeroConvertido > 10){

        if(!resultado){
            let resultado = document.createElement('p')
            resultado.id = 'resultado'
            principal.appendChild(resultado)
        }

        resultado.innerText = 'Número inválido!'

    } else {

        if(!resultado){
            let resultado = document.createElement('p')
            resultado.id = 'resultado'
            principal.appendChild(resultado)
        }

        resultado.innerText = 'Número válido!'
    }
})