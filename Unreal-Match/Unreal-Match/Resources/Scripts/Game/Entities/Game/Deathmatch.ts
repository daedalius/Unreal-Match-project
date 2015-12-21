import GameClient = require('GameClient');

class DeathMatch extends GameClient {
    constructor(player, objects, world) {
        super(player, objects, world);
    }
}

export = DeathMatch;