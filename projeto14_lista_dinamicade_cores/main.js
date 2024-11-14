let numeroDeCores = prompt('Quantas cores você deseja na sua lista?') // recebendo numero
let numero = parseInt(numeroDeCores) // transformando ele em um inteiro
let listaCores = [] // criando lista

const reload = () => { // função que recarrega a página
    return location.reload() // location.reload() recarrega a página
}

if (isNaN(numeroDeCores) || numero != numeroDeCores) { // verificando se o que foi digitado é uma string ou um numero quebrado

    alert('Digite apenas números inteiros!') // mensagens a serem mostradas caso isso seja true
    alert('Recarregue a página!')

    let secaoBotao = document.getElementById('secaobotao') // capturando div do botão
    let botaoReload = document.createElement('button') // criando botão
    botaoReload.innerText = 'Recarregar' // adicionando texto ao botão
    secaoBotao.appendChild(botaoReload) // adicionando botão dentro da div botão
    botaoReload.onclick = reload // chamando função sem os () para que ela seja executada apenas com o click ocorrer

} else { // se der tudo certo prossegue com:

    let lista = document.getElementById('lista') // capturando ul do html e guarando na variavel

    // O i vai começar de i e vai até ele ser igual ao numero de cores que o usuário digitou
    for (let i = 1; i <= numeroDeCores; i++ ){
        let coresEntrada; // criando variavel que vai armazenar os prompts 

        // verificando se o que é digitado são apenas letras 

        do { // faça
            coresEntrada = prompt(`Digite sua ${i}º cor:`) // a entrada dos itens

            if (coresEntrada.trim() === ""){ // porem se a string for vazia
                alert('Você não pode deixar o campo vazio! Digite uma cor válida.')

            } else if(/[\d]/.test(coresEntrada)){ // se esse test for true
                alert('Digite uma cor válida, sem números!')
            }

        // enquanto    trim for true ou o test for true
        } while (coresEntrada.trim() === "" || /[\d]/.test(coresEntrada)) 
            // sendo false (ele sai do enquanto) adiciona o elemento na lista
            listaCores.push(coresEntrada) 

            let itemLista = document.createElement('li') // cria o elemento do li
            itemLista.innerText = coresEntrada // adiciona o texto do prompt ao elemento li na variavel
            lista.appendChild(itemLista)  // adiciona elemento li ao ul que está na variavel lista

        // enquanto a string for vazia ou tiver numeros dentro dela, faça o pedido da entrada dos dados
        // porém, se ao digitar uma string com número, exiba uma alerta
        // se a string for vazia também exiba um alerta
        // se não for vazia ou não possuir numeros ai podemos adicionar o elemento na lista, criar um elemento de lista, colocar o texto dentro dele e adicionar o elemento ao itemLista

    }

    // alert(`Suas cores são: ${listaCores.join(", ")}`) // esse join(", ") foi utilizado para organizar os elementos colocando uma virgula e espaço entre eles
}
