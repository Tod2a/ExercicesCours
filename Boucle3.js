for(let i=1; i<=10; i++) {
    for(let x=65; x<=90; x++) {
        console.log(i+String.fromCharCode(x))
    }
}





for(let i=1; i<=10; i++) {
    let alphabet = "";
    for(let x=65; x<=90; x++) {
        alphabet += i + String.fromCharCode(x) + " ";
    }
    console.log(alphabet);
}
