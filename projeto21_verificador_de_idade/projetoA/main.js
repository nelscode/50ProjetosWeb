let entradaIdade
let entradaIdadeConvertida

const capturarValor = (event) => {
    event.preventDefault()

    entradaIdade = document.getElementById('entradaIdade').value
    entradaIdadeConvertida = parseInt(entradaIdade)

    let principal = document.getElementById('principal')
    let resultado = document.getElementById('resultado')
    
    if (isNaN(entradaIdadeConvertida) || entradaIdade != entradaIdadeConvertida){
    
        if(!resultado){
            let resultado = document.createElement('p')
            resultado.id = 'resultado'
            principal.appendChild(resultado)
        }

        resultado.innerText = 'Digite apenas números!'

    } else if (entradaIdadeConvertida < 0) {

        if(!resultado){
            let resultado = document.createElement('p')
            resultado.id = 'resultado'
            principal.appendChild(resultado)
        }

        resultado.innerText = 'Você ainda não existe!'

    } else if (entradaIdadeConvertida >= 125){
        
        if(!resultado){
            let resultado = document.createElement('p')
            resultado.id = 'resultado'
            principal.appendChild(resultado)
        }

        resultado.innerText = 'Você é no mínimo um vampiro!'
    } 
    
    else if (entradaIdadeConvertida >= 18 && entradaIdadeConvertida < 125){
        
        if(!resultado){
            let resultado = document.createElement('p')
            resultado.id = 'resultado'
            principal.appendChild(resultado)
        }

        resultado.innerText = 'Você é um adulto!'

    } else if (entradaIdadeConvertida < 18){
        
        if(!resultado){
            let resultado = document.createElement('p')
            resultado.id = 'resultado'
            principal.appendChild(resultado)
        }

        resultado.innerText = 'Você não é adulto!'

    } 
}

let botaoVerificar = document.getElementById('botaoVerificar')
botaoVerificar.addEventListener('click', capturarValor)