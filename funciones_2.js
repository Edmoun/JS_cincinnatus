function area(){
    const pi = 3.14;
    let radio = document.getElementById("radio").value
    let resultado = pi * radio * radio
    document.getElementById("resultado").value = resultado;
}

// Eval 

let a = 20;
let b = 10;
let c = eval("a + b")
let y = eval("3 + 4")
let z = eval("a + 8")
let result = c + y
console.log(result)

// parseInt y parseFloat: Nos ayudan a extrar numeros dentro de un string

