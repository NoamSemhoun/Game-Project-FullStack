var rows = 3;
var columns = 3;
var currCell; // Cell dragged
var freeCell; // White cell
var turns = 0; // How many time cells are swaped
var realImg = ["4", "2", "8", "5", "1", "6", "7", "9", "3"]; // In this order it's possible to do the puzzle

window.onload = function() {
    for (let i=0; i < rows; i++) {
        for (let j=0; j < columns; j++) {
            let cell = document.createElement("img");
            cell.id = i.toString() + "-" + j.toString(); //Display les coordonates of the cell
            cell.src = "../Pictures/" + realImg.shift() + ".jpg" ;

            cell.addEventListener("dragstart", dragStart); // Click an image to drag
            cell.addEventListener("dragover", dragOver); // Moving image around while clicked
            cell.addEventListener("dragenter", dragEnter); // Dragging image onto another one
            cell.addEventListener("dragleave", dragLeave); // dragged image leaving another image
            cell.addEventListener("drop", dragDrop); // drag an image over an other image, drop the image
            cell.addEventListener("dragend", dragEnd); // after drag drop, swap the two images

            document.getElementById("board").append(cell);
        }
    }
}

function dragStart() {
    currCell = this; // this refers to the img cell being dragged
}

function dragOver(e) {
    e.prenventDefault();
}

function dragEnter(e) {
    e.prenventDefault();
}

function dragLeave() {

}

function dragDrop() {
    freeCell = this; // this refers to the img cell being dropped on
}

function dragEnd() {

    if(!freeCell.src.includes("3.jpg")) {
        return;
    }

    let currCoord = currCell.split("-");
    let i = parseInt(currCoord[0]);
    let j = parseInt(currCoord[1]);

    let freeCoord = freeCell.split("-");
    let k = parseInt(currCoord[0]);
    let l = parseInt(currCoord[1]);

    let left = i == k && l == j-1;
    let right = i == k && l == j+1;
    let up = j == l && k == i-1;
    let down = j == l && k == i+1;

    let near = left || right || up || down;

    if(near) {
        let currImg = currCell.src;
        let freeImg = freeCell.src;

        currCell.src = freeImg;
        freeCell.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
    
}