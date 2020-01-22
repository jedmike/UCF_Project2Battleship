//********************************************************* */
//Game constructor
class BattleshipGame {

    constructor(p1, p2) {
        this.players = [p1, p2];

        this.turns = [null, null];
        this.ships = {};


        this.sendToPlayers('Battleship Starts!');

        this.players.forEach((player, idx) => {
            player.on('turn', (turn) => {
                this.onTurn(idx, turn);
                console.log('firrrrrrrrrrrrrring');
                console.log(turn);
                console.log('firrrrrrrrrrrrrring');
            });
        });

        this.players.forEach((player, idx) => {
            player.on('ship', (ship) => {
                this.onTurn(idx, ship);
                console.log('shipppppppppppppp');
                console.log(ship);
                console.log('shippppppppppppppp');
            });
        });
    }

    sendToPlayer(playerIndex, msg) {
        this.players[playerIndex].emit('message', msg);
    }

    sendToPlayers(msg) {
        this.players.forEach((player) => {
            player.emit('message', msg);
        });
    }

    onTurn(playerIndex, turn) {
        this.turns[playerIndex] = turn;
        this.sendToPlayer(playerIndex, `You selected ${turn}`);
    }
    onShip(playerIndex, ship) {
        this.ship[playerIndex] = turn;
        this.sendToPlayer(playerIndex, `You selected ${ship}`);
    }

    //*********************************************************/

    //Battleship issue 1:
    //codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
    //Psuedocode of what needs to happen next
    //create an array for each Player
    //a 2d array that will contain the status of each square on the board


    //0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
    // */
    // //     [0, 0, 0, 1, 2, 1, 1, 0, 0, 0],
    // //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // //     [0, 0, 3, 0, 0, 0, 1, 0, 0, 0],
    // //     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    // //     [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    // //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // //     [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // //     [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    // //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // // 
    //listen for ship objects from each player
    //prototype constructor
    // let shipex = {
    //     type: "battleship",
    //     nosq: 4,
    //     locations: ["s00", "s01", "s02", "s03"],
    //     hits: [],
    //     sunk: false,
    // };

    //check if already used, alert
    //push ship square locations into array

    //send Game Starts
    //codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//

    //Battleship issue :
    //codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//
    //send player 1 your turn
    //listen for fire sq
    //call check grid function
    //check if already used, alert
    //hits=17 winner
    //message  hit/mis/sunk/winner status
    //send player 2 your turn
    //listen for fire sq
    //call check grid function
    //check if already used, alert
    //hits=17 winner
    //message  hit/mis/sunk/winner status
    //codeNeededcodeNeededcodeNeededcodeNeededcodeNeededcodeNeeded//






}

module.exports = BattleshipGame;