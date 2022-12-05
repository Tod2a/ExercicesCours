let myArray = [
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 8],
    [6, 7, 8, 9]
];
for (let i = 0; i < 5; i++) {
    let montre = "";
    for (let j = 0; j < 4; j++) {
        montre += myArray[i][j] + " ";
    }
    console.log(montre);
}
