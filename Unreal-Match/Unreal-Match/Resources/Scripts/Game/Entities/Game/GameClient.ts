import ResourceLoader = require('Resources/Scripts/Game/Cache/resource-loader');
import GameConfiguration = require('Resources/Scripts/Game/Entities/Game/GameConfiguration');
import ComponentContainer = require('Resources/Scripts/Game/Entities/Components/ComponentContainer');

import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');
import Player = require('Resources/Scripts/Game/Entities/Objects/Player.Object');

import World = require('Resources/Scripts/Game/Entities/Game/World');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');

abstract class GameClient extends ComponentContainer {
    /** Current player */
    public Player: Player;
    /** All game objects */
    public Objects: Array<GameObject>;
    /** Game world */
    public World: World;
    /** Action camera */
    public Camera: Camera;
    /** GameConfiguration */
    public Configuration: GameConfiguration;

    /** Creates base fields and constructs base cache structure with common items and level */
    constructor(player: Player, objects: Array<GameObject>, world: World, camera: Camera, configuration: GameConfiguration) {
        super();

        this.Player = player;
        this.Objects = objects;
        this.World = world;
        this.Camera = camera;
        this.Configuration = configuration;

        ResourceLoader.LoadBaseBundle(this.Configuration.VideoMode);
        ResourceLoader.LoadLevelBundle(this.Configuration.VideoMode, this.World.Level);
    }
}

export = GameClient;