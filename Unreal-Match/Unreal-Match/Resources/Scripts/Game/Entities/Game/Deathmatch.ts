import GameClient = require('GameClient');

class DeathMatch extends GameClient {
    constructor(player, objects, world) {
        super(player, objects, world);

        // TODO: cache specific for deathmatch items
    }
}

export = DeathMatch;