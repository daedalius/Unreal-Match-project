import GameClient = require('GameClient');

class DeathMatch extends GameClient {
    constructor(player, objects, world, camera, configuration) {
        super(player, objects, world, camera, configuration);

        // TODO: cache specific for deathmatch items
    }
}

export = DeathMatch;