const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const Btl = require('./btl.js');
const app = express();
var port = 3000;


const clientPath = '../client/';
console.log(clientPath);
console.log('Serving static from ${clientPath}');

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

let waitingPlayer = null;

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Minimum socket working connectionn
// io.on('connection', (socket) => {
//     new Btl(waitingPlayer, socket);
//     console.log('A player connected');
//     console.log((new Date().toISOString()) + ' ID ' + socket.id + ' connected.');
//     socket.emit('message', 'You are connected ');
// })
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

io.on('connection', (socket) => {
    console.log('beep');
    if (waitingPlayer) {
        console.log('beep beep');
        new Btl(waitingPlayer, socket);
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
    console.log("Battleship Started on:" + port);
});