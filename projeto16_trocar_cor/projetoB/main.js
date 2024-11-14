let numeroDeCores = prompt('Digite quantas cores deseja colocar: ')
let numeroDeCoresConvertidos = parseFloat(numeroDeCores)

let listaDeCores = ['white']

if(isNaN(numeroDeCoresConvertidos) || numeroDeCores != numeroDeCoresConvertidos){
    alert('Digite apenas números inteiros!')
    location.reload()

} else {

    for(i = 1; i <= numeroDeCoresConvertidos; i++){
        let entradaCores = prompt(`Digite sua ${i}º cor (em inglês):`)
        listaDeCores.push(entradaCores)
    }
}

let contadorDeTroca = 0

const trocarCor = () => {
    let body = document.body
    
    body.style.backgroundColor = listaDeCores[contadorDeTroca]
    contadorDeTroca++

    if(contadorDeTroca >= listaDeCores.length){
        contadorDeTroca = 0
    }
}
