let n = [] 
    for (let i=0; i < 5; i++) {
        let c=[];
        for (j=0; j < 4; j++){
            c[j]=0
        }
        n[i]=c;
    }
console.log(n)


/* let matrice2=[[]];

for(let i=0;i<5;i++){
    for(let j=0;j<4;j++){
        matrice2[i][j]=i+j+2;
    }
}

console.log(matrice2[2][3]);
 */


let matrice2=[[]];

for(let i=0;i<5;i++){
    for(let j=0;j<4;j++){
        matrice2[i].push(i+j+2);
    }
    matrice2.push([]);
}

console.log(matrice2[2][3]);