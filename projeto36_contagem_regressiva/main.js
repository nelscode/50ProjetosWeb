const contagem = document.querySelector('#sectionContagem h2')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const resetar = document.querySelector('.resetar')

let segundos = 60 
let minutos = 5
let intervalo

function atualizarTempo(){
    contagem.textContent = `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`
}

iniciar.addEventListener('click', function(){

    if (intervalo) return // se intervalo estiver sendo utilizado, saia da função

    intervalo = setInterval(function(){ // assim que o intervalo começar 
        segundos-- // os segundos iram decrementar em menos 1
        
        // por isso precisamos verificar quando eles chegam a zero
        if (segundos < 0){ // quando os segundos chegarem a zero nos vamos verificar se os minutos também chegaram
            if (minutos === 0){

                clearInterval(intervalo) // se os minuutos chegarem a zero, paramos o loop

                intervalo = null // intervalo vai ser limpo (usamos o null para isso)

                return // usamos o return para sair da função
            }
            // caso não, decremente -1 nos minutos
            minutos--
            segundos = 59 // retornando os segundos para 59

        }
        atualizarTempo()
    }, 1000) // precisamos lembrar que isso atualiza a cada segundo (1000 milissegundos)

})

pausar.addEventListener('click', function(){
    clearInterval(intervalo)
    intervalo = null
    atualizarTempo()
})

resetar.addEventListener('click', function(){
    clearInterval(intervalo)
    segundos = 60
    minutos = 5
    intervalo = null
    contagem.textContent = '00:00'
})