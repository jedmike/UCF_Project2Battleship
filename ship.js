//Start of ship constructor



// let shipex = {
//     type: "battleship",
//     nosq: 4,
//     locations: ["s00", "s01", "s02", "s03"],
//     hits: [],
//     sunk: false,
// };



class Ship {
    constructor(type, length, position) {
        this.type = type;
        this.length = length;
        this.position = [position];

    }
    printStats() {
            let outString = "";
            outString += `${this.type} is ${this.length} ${this.profession}.\n`;
            console.log(outString);

            return outString;
        }
        // isAlive() {
        //   // if hp >= 0 then return true
        //   return this.strength >= 0 ? true : false;
        // }
        // attack(otherCharacter) {
        //   otherCharacter.strength -= this.hitpoints;
        // }
        //   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
        // levelUp() {
        //   this.age++;
        //   this.strength += 5;
        //   this.hitpoints += 25;
        // }
}