/**
 * @author Thomas Copin <t.copin@yahoo.fr>
 */

var a = Math.round(Math.random(100) * 100);
var b = 50;
var min = 0;
var max = 100;
while (b != a) {
    if (a == 0){
        b = 0;
    }
    if (b > a) {
        console.log(b);
        max = b;
        b = Math.round(((max - min) / 2) + min);
    }
    if (b < a) {
        console.log(b);
        min = b;
        b = Math.round(((max - min) / 2) + min);
    }
}
alert("Et voilà, " + b + " était le bon chiffre");
