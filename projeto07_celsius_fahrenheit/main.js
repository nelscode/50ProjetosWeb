const convert = (c) => {
    return (c * 9/5) + 32
}

let celsius = Number(prompt('Digite uma temperatura em Celsius'))

// Não podemos verificar celsius assim: celsius === NaN por que NaN sempre vai retornar false, logo essa condição nunca seria True, por isso, usamos a função isNaN() para verificar se um valor é NaN, mas nunca == NaN ou === NaN
if (isNaN(celsius)) { 
    let result = document.getElementById("result")
    let botao = document.getElementById("div-botao")
    result.innerHTML = `Digite apenas números! <br> Recarregue a página!`; // exibindo texto 
    botao.innerHTML = `<button id="botaoReload" onClick = "window.location.reload()">Recarregar Página</button>`
    
} else {
    let fahrenheit  = convert(celsius)
    let result = document.getElementById("result")
    let botao = document.getElementById("div-botao") 
    // usamos toFixed() para especificarmos quantas casas decimais desejamos apos a virgula ou ponto
    result.innerText = `${celsius}ºC são iguais a ${fahrenheit.toFixed(2)}ºF`; 
    botao.innerHTML = `<button id="botaoReload" onClick = "window.location.reload()">De novo</button>`
}


