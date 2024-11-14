let numeroDeCores = prompt('Digite quantas cores deseja na sua lista:')
let numeroDeCoresConvertidos = parseInt(numeroDeCores)
let listaDeCores = ['White']
let entradaCores;

if(isNaN(numeroDeCoresConvertidos) || numeroDeCores != numeroDeCoresConvertidos){
    alert('Digite apenas números inteiros!')

} else {
    
    for(let i = 1; i <= numeroDeCoresConvertidos; i++){

        do {
          entradaCores = prompt(`Digite sua ${i}º cor:`)

        } while(/[\d]/.test(entradaCores) || entradaCores.trim() == "")
          listaDeCores.push(entradaCores)  
    }
}

const trocarCor = () => {
    let body = document.body
    let corAleatoria = Math.round(Math.random() * listaDeCores.length)
    body.style.backgroundColor = listaDeCores[corAleatoria]
}