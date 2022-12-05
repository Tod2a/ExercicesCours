let array = [1, 5, 9, "banana", 8, 3, 5];
let conca = [];
for (let i = 0; i < array.length; i++) {
    if (array.filter(el => el === array[i]).length > 1) {
        conca.push(i);
    }
}
for (let i = 0; i < conca.length; i++) {
    array[conca[i]] = "modifié";
}
console.log(array);