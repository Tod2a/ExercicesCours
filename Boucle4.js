let nombre1 = parseInt(prompt("entrez nombre 1"));
let nombre2 = parseInt(prompt("entrez nombre 2"));
if (nombre1 <= nombre2) {
    for (let i = parseInt(nombre1); i <= parseInt(nombre2); i++) {
        console.log(i);
    }
}
if (nombre1 > nombre2) {
    for (let i = parseInt(nombre1); i >= parseInt(nombre2); i--) {
        console.log(i);
    }
}
