// forEach: funcion que me permite iterar sobre cada uno de los elementos de un array.
const numeros = [1,2,3,4,5]

numeros.forEach(function (numero) {
    return numero * 2
})

// some: Esta funcion me muestra los numeros que estan en mi array.
// every: Esta funcion me dice los numeros que no estan en mi array.
// map: me permite extraer los elementos de mi array y hacer con ellos lo que quiera.
const students = [{
    nombre: "Juan",
    Apellido: "Rodriguez",
    Edad: 22
},
{
    nombre: "Pedro",
    Apellido: "Ramirez",
    Edad: 25
}, 
]
const contar = students.map(student => {
    return {
        // Los tres puntos se utilizan para tomar tomar todos los valores existentes de un objeto
        ...student,
        Titulo: student.nombre + " - " + student.Edad
    }
})
// filter: me permite crear un sub-arreglo de mi arreglo, claro cumpliendo la condicion que se le ponga.

const palabras = ["Ana", "Amauri", "Mendez", "Paula"]

const decir = palabras.filter(palabra => {
    return 
})
console.log(decir)