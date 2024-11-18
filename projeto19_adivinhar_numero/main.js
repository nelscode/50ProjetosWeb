// Randomizando o número que o computador vai escolher
let numeroEscolhidoPeloPc = Math.round(Math.random() * 100); 

// Criando e inicializando o contador de tentativas do usuário
let contadorDeTentativas = 0;

// Função que vamos atribuir a um botão para dar reload na página
const reload = () => { 
    return location.reload() // location.reload() sempre recarrega a pagina
}

// Essa vai ser a função que vai capturar o valor do input que colocamos no html, ela recebe apenas um parametro
const capturarValor = (event) => {
    event.preventDefault(); // esse parametro é usado apenas para utilizarmos a função preventDefault() que impede da página ser recarregada automaticamente

    // vamos capturar o valor (.value) do input com id entradaNumeros
    let entradaNumeros = document.getElementById('entradaNumeros').value; 

    // Verificando se o usuário não está enviando uma string vazia
    if (entradaNumeros === '') {
        
        // Se a string vazia vamos capturar os elementos formulário e resultado
        let principal = document.getElementById('principal');
        let resultado = document.getElementById('resultado'); // porém, o elemento de id resultado ainda não existe

        // Se nãoResultado for true (não existir elemento de resultado)
        if (!resultado) {   
            // criamos o elemento resultado (que é um paragrafo)    
            resultado = document.createElement('p');
            resultado.id = 'resultado'; // atribuimos a ele a id resultado 
            principal.appendChild(resultado); // e adicionamos esse elemento ao seu pai: formulário
        }

        resultado.innerText = `Você não digitou nada!` // e ai exibimos ao usuário que ele não digitou nada
    } else {
        // porém, se o input não for uma string vazia
        let entradaNumerosConvertido = Math.round(entradaNumeros); // recebemos um número já o arredondando para o inteiro mais próximo

        // a função que verifica o palpite sempre vai estar verificando a entrada já convertida
        verificandoPalpite(entradaNumerosConvertido); 
    }
};

// A entradaNumero é o palpite do usuário e essa função abaixo vai verificar o palpite
const verificandoPalpite = (palpite) => {

    // Ela começa capturando os elementos do HTML que vão ser utilizados
    let principal = document.getElementById('principal')
    let resultado = document.getElementById('resultado') // esse elemento ainda não existe
    let tentativas = document.getElementById('tentativas') // esse elemento ainda não existe
    let btnReload = document.getElementById('buttonReload') // esse elemento ainda não existe
    let botaoTentar = document.getElementById('botaoTentar')

    // Vamos somar +1 ao contadorDeTentativas toda vez que o usuário der um palpite
    contadorDeTentativas++; 

    // Aqui verificamos se o palpite é menor do que 0 e maior do que 100
    if (palpite < 0 || palpite > 100) {

        // Se sim, verificamos novamente se o elemento resultado existe, se ele não existir, executamos:
        if (!resultado) { 
            // criação, atribuição de id e adicionamos ao pai formulário
            resultado = document.createElement('p');
            resultado.id = 'resultado';
            principal.appendChild(resultado);
        }

        // Aqui vamos utilizar estilização para colocar a cor vermelha no texto
        resultado.style.color = 'red';
        resultado.innerText = `Error: Adivinhe um número entre 0 e 100`; // mostramos ao usuário que ele passou do limite do jogo
    
      // Vamos seguir o mesmo padrão para verificar se o palpite é menor que o número escolhido pelo pc  
    } else if (palpite < numeroEscolhidoPeloPc) {
        if (!resultado) {
            resultado = document.createElement('p');
            resultado.id = 'resultado';
            principal.appendChild(resultado);
        }

        resultado.style.color = 'black';
        resultado.innerText = `Escolha um número maior`;

      // Aqui verificamos se o palpite é maior que o número escolhido pelo PC
    } else if (palpite > numeroEscolhidoPeloPc) {
        if (!resultado) {
            resultado = document.createElement('p');
            resultado.id = 'resultado';
            principal.appendChild(resultado);
        }

        resultado.style.color = 'black';
        resultado.innerText = `Escolha um número menor`;

      // Se o palpite for igual ao número escolhido pelo PC, o usuário acertou!
    } else if (palpite === numeroEscolhidoPeloPc) {

        // e ai criamos o paragrafo para mostrar quantas tentativas o usuário testou antes de acertar
        if (!tentativas) {
            tentativas = document.createElement('p');
            tentativas.id = 'tentativas';
            principal.appendChild(tentativas);
        }

        resultado.style.color = 'green';
        resultado.innerText = `VOCÊ ACERTOU!!! 🥳🎉`;
        tentativas.style.color = 'green'; // esse resultado tem cor verde
        tentativas.innerText = `Número de tentativas até o acerto: ${contadorDeTentativas}`; // mostrando o total de tentativas

        // também criamos um botão que vai dar reload na página
        if (!btnReload) {
           btnReload = document.createElement('button');
           btnReload.id = 'buttonReload';
           principal.appendChild(btnReload);
        }
        
        // adicionando texto a ele
        btnReload.innerText = 'Tente novamente!'
        // adicionando evento de click a ele, assim que ele for clicado ele executa a função reload
        btnReload.addEventListener('click', reload)

        // após o usuário ter finalizado o jogo as cores do input e botão sao mudadas
        botaoTentar.style.BackgroundColor = "#ccc"
        entradaNumeros.style.BackgroundColor = "#ccc"
        botaoTentar.disabled = true; // e tanto o input quanto o botão são desativados
        entradaNumeros.disabled = true;

    }
};

// capturando elemento do botão
let btnTentar = document.getElementById('botaoTentar');
// adicionando um evento ao botão: quando ele for clicado a função capturar valor será executada
btnTentar.addEventListener('click', capturarValor);
