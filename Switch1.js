let transport=prompt("entrez le transport");
switch(transport){
case"velo":
    console.log("le transport est un vélo avec 2 roues");
    break;
case"moto":
    console.log("le transport est une moto avec 2 roues");
    break;
case"bus":
    console.log("le transport est un bus avec 4 roues");
    break;
case"voiture":
    console.log("le transport est une voiture avec 4 roues");
    break;
case"avion":
    console.log("le transport est un avion avec un train d'atterissage contenant 18 roues");
    break;
case"quad":
    console.log("le transport est un quad avec 4 roues");
    break;
default:
    console.log("le transport est inconnu");
    break;
}

switch(transport){
    case"moto":
    case"vélo":
        console.log(transport + "à 2 roues");
        break;
    case"voiture":
    case"quad":
        console.log(transport + "à 4 roues");
        break;
    case"avion":
    case"bus":
        console.log("ca dépend");
        break;
    default:
        console.log("transport inconnu");
}