//let array = [1, 8, 5, 3];
//let arrayReverse = [];
//for(i=array.length-1; i>-1;i--){
    //arrayReverse.push(array[i]);
//}
//console.log(arrayReverse);


let array = [1, 8, 5, 3];
let count = 0;
let i = array.length-1
while(i>-1){
    array.push(array[i]);
    count++;
    i--;
}
array.splice(0, count);
console.log(array);