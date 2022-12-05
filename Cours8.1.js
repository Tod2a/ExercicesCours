let array = [5, "banana", 12, 5, 3];
let checking = prompt("quelle valeur ou quel mot voulez-vous chercher ?");
let count = 0;
for (let i = 0; i < array.length; i++){
    if(checking == array[i]){
        count++;
    }
}
console.log(count);