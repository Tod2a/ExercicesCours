let c = parseInt(prompt("donner votre premier chiffre"));
let d = parseInt(prompt("donnez votre deuxieme chiffre"));
let vouloir = prompt("chosissez votre opération, 1=somme, 2=soustraction, 3=multiplication, 4=division");

console.log(choix(vouloir, c, d));

function choix(demande, a, b) {
    if (demande == 1) {
        return somme(a, b);
    }
    if (demande == 2) {
        return soustraction(a, b);
    }
    if (demande == 3) {
        return multiplication(a, b);
    }
    if (demande == 4) {
        return division(a, b);
    }
}

function somme(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}
