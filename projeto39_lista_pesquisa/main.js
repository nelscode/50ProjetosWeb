// Capturano elemento da barra de pesquisa
const inputPesquisa = document.querySelector('#pesquisa')

// Capturando todos os elementos li da página
const itensLista = document.querySelectorAll('li')

// adicionando o evento input que será acionado toda vez que o input for utilizado
inputPesquisa.addEventListener('input', function(){
    
    // quando acionado nos vamos pegar o valor digitado e adiciona-lo a essa variavel já transformado em minusculo
    const termoPesquisado = inputPesquisa.value.toLowerCase()

    // Vamos usar o forEach para percorrer todos os itens da lista, esse forEach vai ter uma função que vai receber os itens da lista como parametro
    itensLista.forEach(function(item){

        // a cada item percorrido vamos fazer a verificação que é 
        // se o conteúdo do item transformado em minusculo estiver incluido no termo que o usuário pesquisou
        if (item.textContent.toLowerCase().includes(termoPesquisado)){
            item.style.display = '' // então ele vai mostrar o item com esses termos
        } else { 
            item.style.display = 'none' // se não, ele não vai mostrar o item
        }
    })
})
