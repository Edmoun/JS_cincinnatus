// Resta las fechas

const date1 = new Date('Dec 1, 2021')
const date2 = new Date('Dec 24, 2021 00:00:01')
const date3 = new Date('Dec 26, 2021 23:59:59')
const date4 = new Date("December 20, 2021 03:24:00")

function contarDias(date) {
    let fechaIntroducida = new Date(date);
    let navidad = new Date("Dec 25, 2021")
    let navidadMenosDate = navidad.getTime() - fechaIntroducida.getTime();
    let diasDivididos = Math.ceil(navidadMenosDate / (1000 * 3600 * 24));
    return diasDivididos
}
console.log(contarDias(date3))