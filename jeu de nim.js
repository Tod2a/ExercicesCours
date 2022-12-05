let mode = prompt("Choisissez le mode de jeu : joueur contre joueur (a), contre l'ordinateur(b) ou contre l'ordinateur en mode expert(c)");

if(mode == "a"){
    let joueur1 = prompt("notez le nom du premier joueur");
    let joueur2 = prompt("notez le nom du deuxième joueur");
    let j = 0;
    let d = 0;
    for(let i = 20; i > 0; i=j){
        d = prompt("il reste " + i + " batonnets, combien " + joueur1 + " en retire?");
        if(d>3 || d<0){
            d = prompt("vous ne pouvez retirer que 1, 2 ou 3 batonnets");
            
        } 
        j = i-d;
        if(j < 1){
            alert("Bravo "+ joueur1 + " à gagné!")
        }
        if(j > 0){
            d = prompt("il reste " + j + " batonnets, combien " + joueur2 + " en retire?");
            if(d>3 || d<1){
                d = prompt("vous ne pouvez retirer que 1, 2 ou 3 batonnets");
            } 
            j = j-d;
            if(j < 1){
                alert("Bravo, " + joueur2 + " à gagné!")
            }
        }
    }
}
if(mode == "b"){
    let joueur1 = prompt("notez votre nom");
    let j = 0;
    let d = 0;
    for(let i = 20; i > 0; i=j){
        d = prompt("il reste " + i + " batonnets, combien " + joueur1 + " en retire?");
        if(d>3 || d<1){
            d = prompt("vous ne pouvez retirer que 1, 2 ou 3 batonnets");
            
        } 
        j = i-d;
        if(j < 1){
            alert("Bravo "+ joueur1 + " à gagné!")
        }
        if(j > 0){
            let pc = Math.ceil(Math.random(1)*3)
            if(j == 3){
                pc = 3;
            }
            if(j == 2){
                pc = 2;
            }
            if(j == 1){
                pc = 1;
            }
            alert("l'ordinateur retire " + pc + " batonnets");
            j = j-pc;
            if(j < 1){
                alert("Aie, c'est l'ordinateur qui à gagné")
            }
        }
    }
}
if(mode == "c"){
    let joueur = prompt("Donnez votre nom")
    for(let i = 20; i > 0; i=j){
        let pc = 0;
        let coup
        if(i == 20){
            pc = 1;
            j = i-pc;
            coup = prompt("Il reste " + j + " batonnets, combien en retirez-vous?");
            j = j-coup;
        }
        if(i < 20){
            let j = i
            pc = 4-coup;
            j = i-pc;
            if(j<1){
                alert("l'ordi à gagné!");
                break;
            }
            coup = prompt("Il reste " + j + " batonnets, combien en retirez-vous?");
            j = j-coup;
            if(j<1){
                alert("vous avez gagné");
                break;
            }
        }
    }
}
else {
    alert("vous n'avez pas choisit un mode de jeu");
}
