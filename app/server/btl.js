class Btl {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;


        [p1, p2].forEach(s => s.emit('message', 'Game Starts'));

    }


    sendToPlayers(msg) {
        this.players.forEach((player) => {
            p1.emit('message', msg);
        });
    }

}
module.exports = Btl;