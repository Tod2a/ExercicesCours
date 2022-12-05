function nombre(tableau, look) {
    let a = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] == look) {
            a++;
        }
    }
    return a;
}

let array = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5];
let checking = parseInt(prompt("quel chiffre voulez vous check ? (entre 1 et 5"));

console.log(nombre(array, checking));