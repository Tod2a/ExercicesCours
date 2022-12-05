
/**
 * @author Thomas Copin <t.copin@yahoo.fr>
 */

var a = Math.round(Math.random(100) * 100);
var b = prompt("trouvez le chiffre entre 0 et 100!");
for (let i = 1; i < 15; i++) {
    if (b > a) {
        b = prompt("c'est moins que " + b)
    } else if (b < a) {
        b = prompt(" c'est plus que " + b)
    } else if (a == b) {
        alert("vous avez gagné en " + i + " essais, " + a + " était le bon chiffre!");
        break;
    } if (i == 14) {
        alert("c'est perdu, plus d'essai restant.")
    }
}
 