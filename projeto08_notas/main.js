// Entradas
let nota = Number(prompt('Digite sua nota de 0 a 100: '))

// Capturando elementos
let notaDigitada = document.getElementById("nota-digitada")
let notaFinal = document.getElementById("nota-final")
let botaoReload = document.getElementById("botao-reload")

// Processamentoe e saída 
if (nota >= 90 && nota <= 100){

    notaDigitada.innerHTML = nota
    notaFinal.innerHTML = "<p style='color: green'>A</p>"
    botaoReload.innerHTML = `<button onClick = 'window.location.reload(true)'>Tente Novamente</button>`


} else if (nota >= 80 && nota <= 89){

    notaDigitada.innerHTML = nota
    notaFinal.innerHTML = "<p style='color: green'>B</p>"
    botaoReload.innerHTML = `<button onClick = 'window.location.reload(true)'>Tente Novamente</button>`


} else if (nota >= 70 && nota <= 79){

    notaDigitada.innerHTML = nota
    notaFinal.innerHTML = "<p style='color: #CFA90A'>C</p>"
    botaoReload.innerHTML = `<button onClick = 'window.location.reload(true)'>Tente Novamente</button>`

} else if (nota >= 60 && nota <= 69){

    notaDigitada.innerText = nota
    notaFinal.innerHTML = "<p style='color: #CFA90A'>D</p>"
    botaoReload.innerHTML = `<button onClick = 'window.location.reload(true)'>Tente Novamente</button>`

} else if (nota >= 0 && nota < 60){

    notaDigitada.innerHTML = nota
    notaFinal.innerHTML = "<p style='color: red'>F</p>"
    botaoReload.innerHTML = `<button onClick = 'window.location.reload(true)'>Tente Novamente</button>`

} else if (isNaN(nota)){

    notaDigitada.innerHTML = '<p style="color: red">Digite uma nota!</p>'
    notaFinal.innerHTML = '<p style=" color: red">Recarregue a página!</p>'
    botaoReload.innerHTML = `<button onClick = 'window.location.reload(true)'>Recarregue a página</button>`


} else if (nota < 0 || nota > 100) {

    notaDigitada.innerHTML = '<p style=" color: red">Nota inválida!</p>'
    notaFinal.innerHTML = '<p style=" color: red">Recarregue a página!</p>'
    botaoReload.innerHTML = `<button onClick = 'window.location.reload(true)'>Recarregue a página</button>`

} 