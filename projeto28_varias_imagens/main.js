// Const com todos os 'links' das imagens da pasta assets
const todasImagens = [
    'assets/IA1.png',
    'assets/IA2.png',
    'assets/IA3.png',
    'assets/IA4.png',
    'assets/IA5.png',
    'assets/IA6.png',
    'assets/IA7.png',
    'assets/IA8.png',
]

// capturando elemento img de id imagem
const elementoImg = document.getElementById('imagem')

// variavel do indice de cada imagem
let indiceImagens = 0

// esse botão é capturado e logo é adicionado um evento de click a ele
const botaoMudar = document.getElementById('botaoMudar').addEventListener('click', function(event){
    event.preventDefault() // impede de recarregar a página

    // ao clicar ele incrementa mais um ao indice de imagens
    indiceImagens++aaaaa

    // se o indice de imagens for maior ou igual ao tamanho da lista
    if (indiceImagens >= todasImagens.length){
        indiceImagens = 0 // o indice das imagens vai ser igual a 0
    }

    // O src do elemento img sempre vai obedecer ao valor do indice
    elementoImg.src = todasImagens[indiceImagens]

})