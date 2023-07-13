// Listar Regalos

const carta = "bici  carro _playstation bici carro peluche"
function listaRegalos(letter) {
    let guardar_objeto = {};
    let regalos = letter.trim().split(" ");
    for (let i = 0; i < regalos.length; i++) {
        let regalo = regalos[i];
        
        if (regalo.startsWith("_")) {
            continue;
        }

        if (guardar_objeto[regalo]) {
            guardar_objeto[regalo] += 1;
        } else{
            guardar_objeto[regalo] = 1;
        }
    }
    return guardar_objeto;
}
console.log(listaRegalos(carta))