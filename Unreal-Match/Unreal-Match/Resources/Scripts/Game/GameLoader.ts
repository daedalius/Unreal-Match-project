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
        position: new Point(500, 500)
    },
    world: {
        level: Level.RisingSun,
        size: new Size(3832, 1423),
        passMap: []
    },
    gameMode: GameMode.Deathmatch,
    configuation: {
        videoMode: VideoMode.HQ,
        origin: new Size(800, 450)
    }
};

// Loader function
// 1: constructs base settings
// 2: returns implementation of GameClient (which parent for Deathmatch, contains )
var game: GameClient = (function () {

    // base settings
    GameConfiguration.VideoMode = json.configuation.videoMode;
    GameConfiguration.Origin = json.configuation.origin;

    // implementation of GameClient
    var player = new Player(1, json.player.position, json.player.team, json.player.character);
    var world = new World(json.world.level, json.world.size, json.world.passMap);
    var objects = new Array<GameObject>();
    objects.push(player);

    if (json.gameMode === GameMode.Deathmatch) {
        game = new Deathmatch(player, objects, world);
    }

    // When cache is done...
    $('#game-cache-element').one('resources-loaded', function () {
        // Camera setup
        Camera.WatchUserInput(player.Position);

        // TODO: report about completion, start network phase
    });

    return game;
})()

//declare var exports: any;
export = game;