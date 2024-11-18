let numeroEscolhidoPeloPc = Math.round(Math.random() * 100); 
let contadorDeTentativas = 0;

const reload = () => { 
    return location.reload()
}

const capturarValor = (event) => {
    event.preventDefault(); 

    let entradaNumeros = document.getElementById('entradaNumeros').value; 

    if (entradaNumeros === '') {
       
        let formulario = document.getElementById('formulario');
        let resultado = document.getElementById('resultado');

        
        if (!resultado) {
            
            resultado = document.createElement('p');
            resultado.id = 'resultado';
            formulario.appendChild(resultado);
        }

        resultado.innerText = `Você não digitou nada!`; ido
    } else {
        
        let entradaNumerosConvertido = Math.round(entradaNumeros);
        verificandoPalpite(entradaNumerosConvertido); 
    }
};

const verificandoPalpite = (palpite) => {
    let formulario = document.getElementById('formulario')
    let resultado = document.getElementById('resultado')
    let tentativas = document.getElementById('tentativas')
    let btnReload = document.getElementById('buttonReload')
    let botaoTentar = document.getElementById('botaoTentar')

    contadorDeTentativas++;

    if (palpite < 0 || palpite > 100) {
        if (!resultado) {
            resultado = document.createElement('p');
            resultado.id = 'resultado';
            formulario.appendChild(resultado);
        }

        resultado.style.color = 'red';
        resultado.innerText = `Error: Adivinhe um número entre 0 e 100`;
    } else if (palpite < numeroEscolhidoPeloPc) {
        if (!resultado) {
            resultado = document.createElement('p');
            resultado.id = 'resultado';
            formulario.appendChild(resultado);
        }

        resultado.style.color = 'black';
        resultado.innerText = `Escolha um número maior`;
    } else if (palpite > numeroEscolhidoPeloPc) {
        if (!resultado) {
            resultado = document.createElement('p');
            resultado.id = 'resultado';
            formulario.appendChild(resultado);
        }

        resultado.style.color = 'black';
        resultado.innerText = `Escolha um número menor`;
    } else if (palpite === numeroEscolhidoPeloPc) {
        if (!tentativas) {
            tentativas = document.createElement('p');
            tentativas.id = 'tentativas';
            formulario.appendChild(tentativas);
        }

        resultado.style.color = 'green';
        resultado.innerText = `VOCÊ ACERTOU!!! 🥳🎉`;
        tentativas.style.color = 'green';
        tentativas.innerText = `Número de tentativas até o acerto: ${contadorDeTentativas}`;

        if (!btnReload) {
           btnReload = document.createElement('button');
           btnReload.id = 'buttonReload';
           formulario.appendChild(btnReload);
        }
        
        btnReload.innerText = 'Tente novamente!'
        formulario.appendChild(btnReload)

        botaoTentar.style.BackgroundColor = "#ccc"
        entradaNumeros.style.BackgroundColor = "#ccc"
        botaoTentar.disabled = true;
        entradaNumeros.disabled = true;

    }
};

let btnTentar = document.getElementById('botaoTentar');
btnTentar.addEventListener('click', capturarValor);

