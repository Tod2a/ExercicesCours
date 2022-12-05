let age = prompt("entrez votre age");
let imc;
if (age < 18) {
    console.log("trop jeune");
}
if (age >= 60) {
    console.log("calcul pas adapté");
    let poid = prompt("entrez votre poid en kilo");
    let taille = prompt("entrez votre taille en metres avec un . et pas une virgule");
    imc = poid / (taille * taille);
    if (imc<18.5){
        console.log("poid insuffisant");
    }
    else if (18.5<=imc && imc<=24.9){
        console.log("poid normal");
    }
    else if(25<=imc && imc<29.9){
        console.log("surpoid");
    }
    else if (30<=imc && imc<=39.9){
        console.log("obésité");
    }
    else if (imc>=40){
        console.log("obésité morbide");
    }
}
if (age >= 18) {
    let poid = prompt("entrez votre poid en kilo");
    let taille = prompt("entrez votre taille en metres avec un . et pas une virgule");
    imc = poid / (taille * taille);
    if (imc<18.5){
        console.log("poid insuffisant");
    }
    else if (18.5<=imc && imc<=24.9){
        console.log("poid normal");
    }
    else if(25<=imc && imc<29.9){
        console.log("surpoid");
    }
    else if (30<=imc && imc<=39.9){
        console.log("obésité");
    }
    else if (imc>=40){
        console.log("obésité morbide");
    }
}