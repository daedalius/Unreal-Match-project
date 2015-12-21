﻿import ResourceLoader = require('../Cache/resource-loader');
import GameConfiguration = require('../GameConfiguration');
import ComponentContainer = require('../Components/ComponentContainer');
import GameObject = require('../Objects/GameObject');
import Player = require('../Objects/Player.Object');

import World = require('World');

abstract class GameClient extends ComponentContainer {
    /** Current player */
    public Player: Player;
    /** All game objects */
    public Objects: Array<GameObject>;
    /** Game world */
    public World: World;

    /** Creates base fields and constructs base cache structure with common items and level */
    constructor(player, objects, world) {
        super();

        this.Player = player;
        this.Objects = objects;
        this.World = world;

        ResourceLoader.LoadBaseBundle();
        ResourceLoader.LoadLevelBundle(this.World.Level);
    }
}

export = GameClient;