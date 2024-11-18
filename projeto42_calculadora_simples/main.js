const botoes = document.querySelectorAll('#botoes')
const visor = document.querySelector('#visor')
const ponto = document.querySelector('#ponto')

botoes.forEach(function(botao){
    botao.addEventListener('click', function(){

        if(botao.textContent === '.' && visor.textContent === ''){
            visor.textContent === ''
        } else {
            visor.textContent+='.'
        }
    })
})