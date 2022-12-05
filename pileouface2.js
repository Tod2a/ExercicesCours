/**
 * @author Thomas Copin <t.copin@yahoo.fr>
 */

var a = prompt("pile (p) ou face (f)");
let x = Math.random();
if (x >= 0.5) {
    r = "p";
} else {
    r = "f";
}
if (a == r) {
    console.log("gagné!");
} else {
    console.log("perdu!");
}
