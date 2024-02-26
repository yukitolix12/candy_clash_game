
var candies = ["Blue", "Orange", "Green","Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var column = 9;
var score = 0;

window.onload = function(){
    startGame();
}

function startGame {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c + column; c++){
            //img
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images" + randomCandy() + ".png";
        }
    }
}