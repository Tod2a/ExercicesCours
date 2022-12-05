let array=[5, "banana", 12, 5, 3];
let checking=prompt("quelle valeur ou quel mot voulez-vous chercher?");
let dedans=0;
for(let i=0; i<array.length;i++){
    if(checking == array[i]){
        console.log(checking + " se trouve à l'index " + i + " du tableau.");
        dedans++;
        break;
    } 
}
if(dedans == 0){
    console.log("pas dans le tableau");
}
