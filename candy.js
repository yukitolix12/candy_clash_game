
var candies = ["Blue", "Orange", "Green","Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var column = 9;
var score = 0;

window.onload = function(){
    startGame();
}

function randomCandy()  {
    return candies[Math.floor(Math.random() * candies.length)]; //0 - 5.99
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c + column; c++){
            //<img id = "0-0" src="./images/Red.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png"
        }
    }
}