const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();

const clientPath = '../client/';
console.log(clientPath);
console.log('Serving static from ${clientPath}');

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (sock) => {
    console.log('A player connected');
    sock.emit('message', 'Hi, You are connected ');
    console.log('message sent');

    sock.on('message', (text) => {
        io.emit('message', (text));
        console.log('Allmessage sent');
    });

});

server.on("error", (err) => {
    console.error("Server error:", err);
});

server.listen(3000, () => {
    console.log("Battleship Started on 3000");
});