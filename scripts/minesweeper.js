const rows = 9;
const columns = 15;
const mines = 10;
const grille = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function initModel(lignes,colonnes,mine){
    var tabCases = new Array(colonnes);
    const nbCases = lignes * colonnes;
    for (i=0;i<colonnes;i++){
        const tab = [];
        for (j=0;j<lignes;j++){
            tab.push(false);
        }
        grille.push(tab);
        
        // console.log("Index : " + i + "Ligne : " + ligne + " Colonne : " + colonne);
        // tabCases[colonne] = ligne;
    }

    for (i=0;i<mines;i++){
        const ligne = getRandomInt(lignes);
        const colonne = getRandomInt(colonnes);
        while (grille[ligne][colonne] == true){
            const ligne = getRandomInt(lignes);
            const colonne = getRandomInt(colonnes);
        }
        grille[ligne][colonne] = true;
    }
    
    console.log(grille);
    return grille;
}

function displayGrid(){
    $('ms-box').append('<div id=ms-grid>a</div>');
}

function startGame(){
    initModel(rows,columns,mines);
}

// console.log(initModel(rows,columns,mines));
startGame();
displayGrid();