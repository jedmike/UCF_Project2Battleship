var rows = 10;
var cols = 10;
var squareSize = 25;
var gameBoardContainer = document.getElementById("gameboard");
var gameBoardContainer2 = document.getElementById("gameboard2");

// get the container element
playerGameGrid();

function playerGameGrid() {
    var gameBoardContainer = document.getElementById("gameboard");
    // make the grid columns and rows
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            // create a new div HTML element for each grid square and make it the right size
            var square = document.createElement("div");
            gameBoardContainer.appendChild(square);
            // give each div element a unique id based on its row and column, like "s00"
            square.id = 'f' + j + i;
            // set each grid square's coordinates: multiples of the current row or column number
            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;
            // use CSS absolute positioning to place each grid square on the page
            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }
}
gameBoardContainer.addEventListener("click", logEvent, false);

function logEvent() {
    console.log(event);
}

playerFleetGrid();

function playerFleetGrid() {
    var gameBoardContainer2 = document.getElementById("gameboard2");
    // make the grid columns and rows
    for (m = 0; m < cols; m++) {
        for (n = 0; n < rows; n++) {
            // create a new div HTML element for each grid square and make it the right size
            var square = document.createElement("div");
            gameBoardContainer2.appendChild(square);
            // give each div element a unique id based on its row and column, like "s00"
            square.id = 's' + n + m;
            // set each grid square's coordinates: multiples of the current row or column number
            var topPosition = n * squareSize;
            var leftPosition = m * squareSize;
            // use CSS absolute positioning to place each grid square on the page
            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }
}
gameBoardContainer2.addEventListener("click", logEvent, false);
// console.log("click");

function logEvent(event) {
    console.log(event);
}