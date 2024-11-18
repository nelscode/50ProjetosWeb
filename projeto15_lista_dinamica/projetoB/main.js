let numeroDeItensDaLista = prompt('Digite quantos itens deseja na sua lista:')
let numeroDeItensDaListaConvertidos = parseInt(numeroDeItensDaLista)

let listaDeTarefas = []

const reload = () => {
    return location.reload()
}

if (isNaN(numeroDeItensDaLista) || numeroDeItensDaLista != numeroDeItensDaListaConvertidos){
    
    alert('Digite apenas números inteiros!')

    let secaoBotao = document.getElementById('secaoBotao')
    let botaoReload = document.createElement('button')
    botaoReload.innerText = 'Tente Novamente'
    secaoBotao.appendChild(botaoReload)
    botaoReload.onclick = reload

} else {

    for(i = 1; i <= numeroDeItensDaListaConvertidos; i++){

        let entradaItens = prompt(`Digite o ${i}º item da sua lista:`)
        listaDeTarefas.push(entradaItens)
    }

    for(i = 0; i < listaDeTarefas.length; i++){

        let elementoLista = document.getElementById('elementoLista')
        let itensLista = document.createElement('li')
        itensLista.textContent = listaDeTarefas[i]
        elementoLista.appendChild(itensLista)
    }

    let secaoBotao = document.getElementById('secaoBotao')
    let botaoReload = document.createElement('button')
    botaoReload.innerText = 'Tente Novamente'
    secaoBotao.appendChild(botaoReload)
    botaoReload.onclick = reload
}