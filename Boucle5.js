let n = prompt("note moi N");
console.log(2);
for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            break;
        }
        if (j == i - 1) {
            console.log(i);
        }
    }
}
