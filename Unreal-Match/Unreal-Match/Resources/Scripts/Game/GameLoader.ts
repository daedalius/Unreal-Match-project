import GameObject = require('Entities/Objects/GameObject');
import Player = require('Entities/Objects/Player.Object');
import Camera = require('Presentation/Camera/Camera');
import World = require('Entities/Game/World');

import VideoMode = require('Enums/VideoMode.Enum');
import GameMode = require('Enums/GameMode.Enum');
import Team = require('Enums/Team.Enum');
import Character = require('Enums/Character.Enum');
import Level = require('Enums/Level.Enum');

import Point = require('Entities/Primitives/Point.Primitive');
import Size = require('Entities/Primitives/Size.Primitive');
import Rectangle = require('Entities/Primitives/Rectangle.Primitive');

import GameConfiguration = require('GameConfiguration');
import GameClient = require('Entities/Game/GameClient');
import Deathmatch = require('Entities/Game/Deathmatch');

import ResourceLoader = require('Cache/resource-loader');

var json = {
    player: {
        character: Character.Lauren,
        team: Team.Red,
    },
    world: {
        level: Level.RisingSun,
        size: new Size(3832, 1423),
        passMap: []
    },
    gameMode: GameMode.Deathmatch,
    videoMode: VideoMode.HQ
};

// Loader function
// 1: constructs base settings
// 2: constructs cache
// 3: returns implementation of GameClient (which parent for Deathmatch)
var game: GameClient = (function () {

    // base settings
    GameConfiguration.VideoMode = json.videoMode;
    GameConfiguration.Origin = new Size(800, 450);

    // cache
    (GameConfiguration.VideoMode === VideoMode.HQ) ? ResourceLoader.LoadHQBundle : ResourceLoader.LoadLQBundle;
    $('#game-cache-element').one('resources-loaded', function () {
        // Camera setup
        Camera.WatchUserInput(new Point(500, 500));

        // TODO: report about completion, start network phase
    });

    // implementation of GameClient
    var player = new Player(1, new Point(100, 100), json.player.team, json.player.character);
    var world = new World(json.world.level, json.world.size, json.world.passMap);
    var objects = new Array<GameObject>();
    objects.push(player);

    if (json.gameMode === GameMode.Deathmatch) {
        return new Deathmatch(player, objects, world);
    }
})()

declare var exports: any;
export = game;