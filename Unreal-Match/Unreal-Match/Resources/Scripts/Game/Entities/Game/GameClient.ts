import GameObject = require('../Objects/GameObject');
import ComponentContainer = require('../Components/ComponentContainer');
import Player = require('../Objects/Player.Object');

import World = require('World');

abstract class GameClient extends ComponentContainer {
    /** Current player */
    public Player: Player;
    /** All game objects */
    public Objects: Array<GameObject>;
    /** Game world */
    public World: World;

    constructor(player, objects, world) {
        super();

        this.Player = player;
        this.Objects = objects;
        this.World = world;
    }
}

export = GameClient;