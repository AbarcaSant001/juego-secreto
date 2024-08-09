let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = []; 
let numeroMaximo = 10;
console.log(numeroSecreto);
function asignartextoelemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML =texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignartextoelemento('p',`Acertaste en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario>numeroSecreto){
            asignartextoelemento('p','El numero secreto es menor');
        }else{
            asignartextoelemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeroSorteado.length == numeroMaximo){
        asignartextoelemento('p','ya sortearon todos los numeros posibles');
    }else {
        if (listaNumeroSorteado.includes(numeroGenerado)) {
        }else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignartextoelemento('h1','Juego del numero secreto');
    asignartextoelemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();