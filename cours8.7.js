let array1 = [1, 3, 5, "banana", 8, 9];
let array2 = [0, "bonjour", 5, "banana", 8, 11, 0, 0, 0, 12];
let index1 = [];
let index2 = [];
let serie = [];
for (let i = 0; i < array1.length && i < array2.length; i++) {
    if (array1[i] == array2[i] && i == 0) {
        index1.push(i);
        serie.push(1);
    }
    else if (array1[i] == array2[i] && array1[i-1] == array2[i-1]){
        serie[serie.length-1] += 1;
    }
    else if (array1[i] != array2[i] && array1[i-1] == array2[i-1]){
        index2.push(i-1);
    }
    else if (array1[i] == array2[i] && array1[i-1] != array2[i-1]){
        index1.push(i);
        serie.push(1);
    }
}
let max = Math.max(...serie)
console.log(index1)
console.log(index2)
console.log(serie)
console.log("les tableaux sont similaires de " + index1[serie.indexOf(max)] +" à " + index2[serie.indexOf(max)]);
