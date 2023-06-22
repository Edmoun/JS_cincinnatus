// Funciones con argumentos

function datos_trabajodor() {
    let salirio = 5000;
    return salirio;
}

let trabajor = datos_trabajodor()
console.log(trabajor)

// Funciones anonimas o de tipo flecha

let resta = (n1,n2) => n1 -n2;

console.log(resta(20,8))

// Funciones anidadas

function operacion(){
    const PI = 3.14;
    function Area(radio) {
        let area = PI * radio * radio
        console.log("El area del circulo es: "+area)
    }
    operacion.Area = Area;
}

let radio = 4;
operacion()
operacion.Area(radio);