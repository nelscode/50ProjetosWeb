let numeroDeTarefas = prompt('Quantas tarefas deseja adicionar?')
let numeroDeTarefasConvertido = parseInt(numeroDeTarefas)

const reload = () => {
    return location.reload()
}

if (isNaN(numeroDeTarefas) || numeroDeTarefas != numeroDeTarefasConvertido){

    alert('Só aceitamos valores númericos inteiros!')

    let secaoBotao = document.getElementById('secaoBotao')
    let botaoReload = document.createElement('button')
    
    botaoReload.innerText = 'Tentar Novamente'
    secaoBotao.appendChild(botaoReload)
    botaoReload.onclick = reload

} else {

    for(i = 1; i <= numeroDeTarefasConvertido; i++){

        let entradaDeTarefas = prompt(`Digite sua ${i}º tarefa:`)

        let listaDinamica = document.getElementById('listaDinamica')
        let itemLista = document.createElement('li')
        
        itemLista.innerText = entradaDeTarefas
        listaDinamica.appendChild(itemLista)

    }

    let secaoBotao = document.getElementById('secaoBotao')
    let botaoReload = document.createElement('button')

    botaoReload.innerText = 'Criar Novamente'
    secaoBotao.appendChild(botaoReload)
    botaoReload.onclick = reload
}
