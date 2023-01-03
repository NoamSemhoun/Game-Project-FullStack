var rows = 3;
var columns = 3;
var currCell;
var freeCell;
var turns = 0;
var realImg = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

window.onload = function() {
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            //Affiche les coordonnées de la cellule
            let cell = document.createElement("img");
            cell.id = i.toString() + '-' + j.toString();
            cell.src = realImg.shift() + ".jpg";
            document.getElementById("board").append(cell);
        }
    }
}