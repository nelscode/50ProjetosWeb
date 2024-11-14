// Capturando elementos
const contador = document.querySelector('#contador')
const botaoAumentar = document.querySelector('#aumentar')
const botaoDiminuir = document.querySelector('#diminuir')
const botaoResetar = document.querySelector('#resetar')

// Contador de clicks
let contadorDeClicks = 0

// Função que soma mais 1 ao contador
const funcaoAumentar = (event) => {
    event.preventDefault()

    contadorDeClicks++
    contador.innerHTML = contadorDeClicks
}

// Função que diminui -1 ao contador
const funcaoDiminuir = (event) => {
    event.preventDefault()
    
    contadorDeClicks--

    // verificando se o contador é 0 para que não diminua mais que isso
    if(contadorDeClicks <= 0){
        contadorDeClicks = 0
    }

    contador.innerHTML = contadorDeClicks
}

// função que reseta o valor do contador a 0
const funcaoResetar = (event) => {
    event.preventDefault()
    contadorDeClicks = 0
    contador.innerHTML = contadorDeClicks
}

// adicionando o evento de click aos botoes para executar as funções
botaoAumentar.addEventListener('click', funcaoAumentar)
botaoDiminuir.addEventListener('click', funcaoDiminuir)
botaoResetar.addEventListener('click', funcaoResetar)