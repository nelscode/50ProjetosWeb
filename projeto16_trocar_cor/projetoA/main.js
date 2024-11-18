let listaDeCores = ['Red', 'Blue', 'Green', 'Black', 'Yellow', 'Gray', 'Pink', 'Orange']
let contadorDeCores = 0

const trocarCor = () => {
    let titulo = document.getElementById('titulo')
    titulo.style.color = listaDeCores[contadorDeCores]
    contadorDeCores++

    if(contadorDeCores >= listaDeCores.length){
        contadorDeCores = 0
    }
}