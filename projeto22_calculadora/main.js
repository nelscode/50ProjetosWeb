const botaoCalcular = document.getElementById('calcular').addEventListener('click', function(event){
    
    event.preventDefault()

    let numero1 = document.getElementById('numero1').value
    let operadores = document.getElementById('operadores').value
    let numero2 = document.getElementById('numero2').value

    let numero1Convertido = Number(numero1)
    let numero2Convertido = Number(numero2)

    let resultado = document.getElementById('resultado')
    let calculo;

    switch (operadores){

        case 'adicao':
            calculo = numero1Convertido + numero2Convertido
            resultado.innerText = calculo
            break

        case 'subtracao':
            calculo = numero1Convertido - numero2Convertido
            resultado.innerText = calculo
            break

        case 'multiplicacao':
            calculo = numero1Convertido * numero2Convertido
            resultado.innerText = calculo
            break

        case 'divisao':

            if (numero2Convertido === 0){

                resultado.innerText = 'Error!';
                resultado.style.color = 'red';

            } else {

                calculo = numero1Convertido / numero2Convertido
                resultado.innerText = calculo
            }
            break
    }  
})

