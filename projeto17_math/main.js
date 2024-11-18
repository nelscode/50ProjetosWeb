let listaCores = ['White', 'Blue', 'Yellow', 'Red', 'Green', 'Orange', 'Black', 'Gray']
let quantidadeCores = listaCores.length // quantidade de elementos na lista

const trocarCor = () => {
    let body = document.body // capturando elemento body

    let corAleatoria = Math.round(Math.random() * (quantidadeCores+1)) // arredondando para o número inteiro mais próximo a randomização de um número maior que zero e menor que a quantidade de cores + 1

    body.style.backgroundColor = listaCores[corAleatoria] // escolhendo a cor com base na aleatoriedade 
    
    
}