let titulo = document.querySelector('h1');
titulo.innerHTML = 'Bienvenido al mundo dev'

{/* <button onclick = 'alertFuntion()'> Haz clic aquí</button> */}

function alertFunction() {
    alert('¡Hola, has hecho clic en el botón');
}

function verificarNumero(numero) {
    if (numero > 0) {
        console.log('El número es positivo');
    } else if (numero < 0) {
        console.log('El numero es negativo');    
    } else {
        console.log('El número es cero');
    }
}

let notaUno = 8;
let notaDos = 6;
let notaTres = 7;
let notaCuatro = 9;

function calcularPromedio(notaUno, notaDos, notaTres, notaCuatro) {
    let promedio = (notaUno + notaDos + notaTres + notaCuatro);
    return promedio;
}