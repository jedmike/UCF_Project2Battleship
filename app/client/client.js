//*************************************************************
//Variables
var rows = 10;
var cols = 10;
var squareSize = 25;
var gameBoardContainer = document.getElementById("gameboard");
var gameBoardContainer2 = document.getElementById("gameboard2");
//*************************************************************

//*************************************************************
//shipex is a test ship object to send to Game
var shipex = {
    type: "battleship",
    nosq: 4,
    locations: ["s00", "s01", "s02", "s03"],
    hits: [],
    sunk: false,
};
//*************************************************************




//*************************************************************
//client Start

//build the two playing grids activly
const playerGameGrid = () => {
    var gameBoardContainer = document.getElementById("gameboard");
    // make the grid columns and rows
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            // create a new div HTML element for each grid square and make it the right size
            var square = document.createElement("div");
            gameBoardContainer.appendChild(square);
            // give each div element a unique id based on its row and column, like "s00"
            square.className = "firesquare";
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
playerGameGrid();


const playerShipGrid = () => {
    var gameBoardContainer = document.getElementById("gameboard2");

    // make the grid columns and rows
    for (m = 0; m < cols; m++) {
        for (n = 0; n < rows; n++) {

            // create a new div HTML element for each grid square and make it the right size
            var square = document.createElement("div");
            gameBoardContainer.appendChild(square);

            // give each div element a unique id based on its row and column, like "s00"
            square.className = "shipsquare";
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
playerShipGrid();

//*************************************************************

//function for deploy ships button, Placeholder
const deployShips = () => {
    console.log("Ships Deployed");
};

//Client issue 1:
//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
//
//Need to create code which after sending the firesquare
//listens for the game reply
//if hit--check for sunk(message hit or sunk)--turn sq red
//miss--turn sq blue
//
//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//

// send player grid selection to game
const sendTurn = (event) => {
        var gbId = event.target.id
        console.log("----------------")
        console.log(event);
        event.target.style.background = 'red';
        // console.log(event);
        console.log(gbId);
        console.log(event.target.className);
        console.log("------------------")
        socket.emit('turn', gbId);
    }
    //Client issue 2:
    //codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
    //
    //Need to create code that prompst a player to enter ship location on grid
    //Click the correct button on page (diff color buttons per ship? ch sq color)
    //
    //Generate an object for each ship which contains:
    //(type,number of squares(for hits,grid cell location array,hits, sunk statis )
    //on Deploy, sends ship objects to game
    //codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//


//send ship Object to game

const sendShip = () => {
    event.target.style.background = '#4CAF50';
    console.log("+++++++++++++++++");
    console.log(shipex);
    socket.emit("ship", shipex);
    console.log("+++++++++++++++++");
}

//*************************************************************
//Event listners for game grids

// gameBoard Firing Grid

gameBoardContainer.addEventListener("click", sendTurn, false);


const writeEvent = (text) => {
    // <ul> element
    const parent = document.querySelector('#events');

    // <li> element
    const el = document.createElement('li');
    el.innerHTML = text;

    parent.appendChild(el);
}

// gameBoard2 Ship Deployment Grid
gameBoardContainer2.addEventListener("click", sendShip, false);
//


//chat
const onFormSubmitted = (e) => {
    e.preventDefault();
    const input = document.querySelector('#chat');
    const text = input.value;
    input.value = '';

    socket.emit('message', text);
}

writeEvent('Welcome to chat!');

//socket listener for message
const socket = io();
socket.on('message', writeEvent);

document.querySelector('#chat-form').addEventListener('submit', onFormSubmitted);
//*************************************************************
//Archived things I might need

//function that logs the event object
// const logEvent = (event) => {
//     console.log(".............")
//     console.log(event);
//     console.log(event.target.id);
//     event.target.style.background = 'red';
//     console.log("..............")

// console.log([shipex]);