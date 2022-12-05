let batons=20;
pvp(batons);

function pvp(pbatons) {
    let j1=prompt("Nom du joueur 1");
    let j2=prompt("Nom du joueur 2");
    while(pbatons>0){
        jeu(batons, j1);
        if (pbatons<1){
            alert(j1 + " est le gagnant!");
        }
        if(pbatons>0){
            jeu(batons, j2)
        }
    }
}

function jeu(jbatons, joueur) {
        let prendre=prompt("combien de Batonnets " + joueur + " veux prendre, il reste " + jbatons + " Batonnets");
        if (prendre > 3 || prendre < 1) {
            prendre=prompt("Vous ne pouvez prendre que 1, 2 ou 3 batonnets")
        }
        else {
            batons = batons-prendre
        }
    }