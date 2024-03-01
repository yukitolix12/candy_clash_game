
var candies = ["Blue", "Orange", "Green","Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;

var currTile;
var otherTile;

window.onload = function(){
    startGame();
}

function randomCandy()  {
    return candies[Math.floor(Math.random() * candies.length)]; //0 - 5.99
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++){
            //<img id = "0-0" src="./images/Red.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on a candy,initialize drag process
            tile.addEventListener("dragover", dragOver);  //click on a candy,moving ,mouse to drag the candy
            tile.addEventListener("dragenter", dragEnter); //dragging candy onto another candy
            tile.addEventListener("dragleave", dragLeave); //leave candy over another candy
            tile.addEventListener("drop", dragDrop); // dropping a candy over another candy
            tile.addEventListener("dragend", dragEnd); //after drag process completed,we swap candy

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board);
}

function dragStart() {
    //this refers to tile that clicked on for dragging
    currTile = this;
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
    //this refers to the target tile that dropped on
    otherTile = this;
}

function dragEnd() {

    let currCoords = currTile.id.split("-"); //id="0~0" ->("0","0")
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;
    }
}

function crushCandy() {
    //crushFive()
    //crushFour()
    crushThree();
}

function crushThree() {
    //check rows
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < columns; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            if(candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")){
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
            }
        }
    }

    //check columns
    for(let c = 0; c < columns; c++){
        for(let r = 0; r < rows-2; r++){

        }
    }
}