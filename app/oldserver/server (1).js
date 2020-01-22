//********************************************************* */
//variable, constants

const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const BattleshipGame = require('./BattleshipGame.js');
const app = express();
var port = 3000;
const clientPath = '../client/';
const server = http.createServer(app);
const io = socketio(server);

//********************************************************* */
//Server start

console.log('Serving static from ${clientPath}');

app.use(express.static(clientPath));



let waitingPlayer = null;

io.on('connection', (socket) => {
    // console.log('beep');
    if (waitingPlayer) {
        // console.log('beep beep');
        new BattleshipGame(waitingPlayer, socket);
        waitingPlayer = null;
    } else {
        waitingPlayer = socket;
        waitingPlayer.emit('message', 'Waiting for an opponent');
    }


    socket.on('message', (text) => {
        io.emit('message', text);
    });
});


server.on("error", (err) => {
    console.error("Server error:", err);
});

server.listen(port, () => {
    console.log("Battleship Game started on port:" + port);
});

//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
//Server issue 1:
//connect to Battleship.db
//initialize it
//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//

//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
//Server issue 2:
//listen for Player name
//listen for Oponent name
//add to database
//      log moves and grids for replay, persistence
//codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Minimum socket working connectionn
// io.on('connection', (socket) => {
//     new Btl(waitingPlayer, socket);
//     console.log('A player connected');
//     console.log((new Date().toISOString()) + ' ID ' + socket.id + ' connected.');
//     socket.emit('message', 'You are connected ');
// })
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// console.log(clientPath);