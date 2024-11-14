// Capturando os botoes e o elemento de cronometro
const cronometro = document.querySelector('#cronometro')
const botaoIniciar = document.querySelector('#iniciar')
const botaoPausar = document.querySelector('#pausar')
const botaoResetar = document.querySelector('#resetar')

// criando variaveis para milissegundos, segundos e minutos
let milissegundos = 0
let segundos = 0
let minutos = 0
let intervalo

// Quando o botão for clicado
botaoIniciar.addEventListener('click', function(){

    // a função setInterval vai 
    intervalo = setInterval(function(){
        milissegundos++ // ficar incrementando +1 aos milissegundos

        if(milissegundos >= 100){ // quando os milissegundos forem = 100
            milissegundos = 0 // eles voltam a ser 0
            segundos++ // mas os segundos são incrementados em 1
        }

        if (segundos >= 60){ // quando os segundos forem iguais a 60
            segundos = 0 // voltam a ser 0
            minutos++ // mais os minutos são incrementados em mais 1
        }

        // chamando função e passando seus parametros
        cronometro.textContent = formatarTempo(minutos, segundos, milissegundos);
    })
})

// apenas pausar
botaoPausar.addEventListener('click', function(){
    clearInterval(intervalo) // interrompe a contagem do cronometro
})

// pausar e zerar tudo (resetar)
botaoResetar.addEventListener('click', function(){
    clearInterval(intervalo) // interrompe a contagem do cronometro
    milissegundos = 0
    segundos = 0
    minutos = 0
    intervalo = 0 // zera tudo

    // chamando função e passando seus parametros
    cronometro.textContent = formatarTempo(minutos, segundos, milissegundos); // e exibe
})

// função que recebe tres parametros para formatar
function formatarTempo(minutos, segundos, milissegundos){
    // e retorna:
    return (
        // se os minutos forem menor do que 10, coloque um zero a esquerda, senão mostre apenas os minutos
        (minutos < 10 ? '0' + minutos : minutos) + ':' + // concatene isso com
        // se os segundos forem menor do que 10, coloque um zero a esquerda, senão mostre apenas os segundos
        (segundos < 10 ? '0' + segundos : segundos) + ':' + // concatene isso com 
        // se os milissegundos forem menor do que 10, coloque um zer o esquerda, senão mostre apenas os milissegundos
        (milissegundos < 10 ? '0' + milissegundos : milissegundos)
    )
}