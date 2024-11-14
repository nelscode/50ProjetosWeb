const capturarValor = (event) => {
    event.preventDefault()

    let entradaIdade = document.getElementById('entradaIdade').value
    let entradaIdadeConvertida = Math.round(entradaIdade)
    let verificacao;

    let principal = document.getElementById('principal')
    let resultado = document.getElementById('resultado')

    verificacao = entradaIdadeConvertida >= 125 
    ? 'Você é no mínimo um vampiro'
    : entradaIdadeConvertida <= 0
    ? 'Você nem existe ainda'
    : entradaIdadeConvertida < 125 && entradaIdadeConvertida >= 65
    ? 'Você é um idoso'
    : entradaIdadeConvertida >= 18 && entradaIdadeConvertida < 65
    ? 'Você é um adulto'
    : 'Você é uma criança'

    if(!resultado){
        let resultado = document.createElement('p')
        resultado.id = 'resultado'
        principal.appendChild(resultado)
    }

    resultado.innerText = verificacao
}

let botaoVerificar = document.getElementById('botaoVerificar')
botaoVerificar.addEventListener('click', capturarValor)