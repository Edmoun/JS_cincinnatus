// Descifra los numeros

function decodeNumber(symbols) {
    const valorSimbolos = {
        ".": 1,
        ",": 5,
        ":": 10,
        ";": 50,
        "!": 100
    };

    let resultado = 0;
    [...symbols].forEach((_,index) => {
        if(valorSimbolos[symbols[index]] < valorSimbolos[symbols[index + 1]]){
            resultado -= valorSimbolos[symbols[index]]
        }
        else{
            resultado += valorSimbolos[symbols[index]] 
        }
    })
    return resultado

}
console.log(decodeNumber("..."))