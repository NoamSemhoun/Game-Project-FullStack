var rows = 2;
var columns = 2;
var currCell; // Cell dragged
var freeCell; // White cell
var turns = 0; // How many time cells are swaped
var realImg = ["15", "13", "12", "14"]; 

window.onload = function() {
    for (let i=0; i < rows; i++) {
        for (let j=0; j < columns; j++) {
            let cell = document.createElement("img");
            cell.id = i.toString() + "-" + j.toString(); //Display the coordinates of the cell
            cell.src = "../Pictures/" + realImg.shift() + ".jpg" ; // Put picture by picture from the array in the order and put them in the board

            cell.addEventListener("dragstart", dragStart); // Click an image to drag
            cell.addEventListener("dragover", dragOver); // Moving image around while clicked
            cell.addEventListener("dragenter", dragEnter); // Dragging image onto another one
            cell.addEventListener("dragleave", dragLeave); // dragged image leaving another image
            cell.addEventListener("drop", dragDrop); // drag an image over an other image, drop the image
            cell.addEventListener("dragend", dragEnd); // after drag drop, swap the two images

            document.getElementById("board1").append(cell);
        }
    }
}

function dragStart() {
    currCell = this; // this refers to the img cell being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    freeCell = this; // this refers to the img cell being dropped on
}

function dragEnd() {

    if(!freeCell.src.includes("Pictures/13.jpg")) {
        return;
    }

    let currCoord = currCell.id.split("-");
    let i = parseInt(currCoord[0]);
    let j = parseInt(currCoord[1]);

    let freeCoord = freeCell.id.split("-");
    let k = parseInt(freeCoord[0]);
    let l = parseInt(freeCoord[1]);

    let left = i == k && l == j-1;
    let right = i == k && l == j+1;
    let up = j == l && k == i-1;
    let down = j == l && k == i+1;

    let near = left || right || up || down;

    if (near) {
        let currImg = currCell.src;
        let freeImg = freeCell.src;

        currCell.src = freeImg;
        freeCell.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
    
}