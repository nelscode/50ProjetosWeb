// o evento input é acionado sempre que algo for digitado no input
const inputText = document.querySelector('#inputText').addEventListener('input', function(){
    this.value = this.value.replace(/[0-9]/g, '')
    // regex: identifica se existe um número de 0 a 9, utilizar essa expressão faz com que toda vez que um número for digitado ele limpa automaticamente o campo e coloca uma string vazia
})

const botaoContar = document.querySelector('#botaoContar').addEventListener('click', function(event){

    event.preventDefault()

    let inputText = document.querySelector('#inputText').value // capturando valor do input
    let tirarEspaco = inputText.replace(/\s+/g, '') // tira todos os espaços das palavras
    let contagem = tirarEspaco.length
    
    let sectionResultado = document.querySelector('#sectionResultado')
    let resultado = document.querySelector('#resultado')

    if(!resultado){
        let resultado = document.createElement('p')
        resultado.id = 'resultado'
        sectionResultado.appendChild(resultado)
    }

    resultado.innerHTML = `${inputText} possui ${contagem} letras!`
})