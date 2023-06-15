/*let a = 50;
let b = 20;
if (a > b) {
    console.log(`${a} es mayor que ${b}`)
} 
else if(a === b) {
    console.log("son iguales")
}
else {
    console.log(`${b} es mayor que ${a}`)
}*/

let curso = "php";

switch (curso) {
    case "java":
        console.log("java");
        break;
    case "python":
        console.log("python");
        break;
    case "javascript":
        console.log("javascript");
        break;
    default:
        console.log("no disponible")
        break;
}