let array = ["Mangue", "Raisin", "Figue", "Kiwi"];
console.log(array);
let achat = prompt("Quel fruit voulez-vous acheter? (attention à la majuscule)");
if (array.indexOf(achat) !== -1) {
    let suppression = array.indexOf(achat);
    array.splice(suppression, 1);
    console.log("ok!");
} else {
    console.log("Indisponible!");
}
console.log(array);