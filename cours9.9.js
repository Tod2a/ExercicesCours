let array=[1,2,3,4,5];
console.log(somme(array));

function somme(tableau){
    let compteur=0
    for (i=0; i<tableau.length; i++){
        compteur+=tableau[i];
    }
    return compteur;
}