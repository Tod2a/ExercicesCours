let array = [5, "banana", 12, 5, 3];
let checking = prompt("quelle valeur ou quel mot voulez-vous chercher?");
let index = [];
for (let i = 0; i < array.length; i++) {
    if (checking == array[i]) {
        index.push(i);
    }
}
console.log(checking + " se trouve à " + index.length + " reprises dans le tableau, aux indexes " + index);
if (index.length == 0) {
    console.log("pas dans le tableau");
}
