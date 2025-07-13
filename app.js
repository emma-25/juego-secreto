let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteado = [];
let numeroMaximo = 10;
// console.log(numeroSecreto);

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignartextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignartextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignartextoElemento('p', 'El número secreto es menor');            
        } else {
            asignartextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteado);
    // Si ya sorteamos todos los números
    if (listaDeNumerosSorteado.length == numeroMaximo) {
        asignartextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el numero generado esta incluido en la lista
        if (listaDeNumerosSorteado.includes(numeroGenerado)) {
        //Concepto de recursividad
        return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteado.push(numeroGenerado)
            return numeroGenerado;
        }
        
    } 
}

function condicionesIniciales() {
    asignartextoElemento('h1', 'Juego del número secreto!');
    asignartextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalos de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();

// ctrl + f: Para buscar valores duplicados
