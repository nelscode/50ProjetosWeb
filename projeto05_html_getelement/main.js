let firstName = prompt('Digite seu primeiro nome: ')
let secondName = prompt('Digite o seu segundo nome: ')
let age = Number(prompt('Digite a sua idade: ')) // recebendo uma string e convertendo para número

// capturando elemento do html que possui uma id: document.getElementById() e colocando dentro de uma constante.
let saudacao = document.getElementById("saudacao") // chamamos o nome da id (apenas)

// Adicionando texto ao elemento que capturamos e concatenando junto do html
saudacao.innerText = `Olá, eu me chamo ${firstName} ${secondName}, e eu tenho ${age} anos de idade!`
// Usamos innerText por que não tivemos necessidade de usar tags HTML

/*
    Quando usamos o innerText ele exibe o texto simples, ou seja, se colocamos alguma tag no texto, ele vai exibir as tags. 
    Quando usamos o innerHTML ele aceita que coloquemos as tags HTML, então ele vai mostrar o resultado que aquela tag trás ao código

*/