import GameObject = require('Entities/Objects/GameObject');
import Player = require('Entities/Objects/Player.Object');
import Camera = require('Presentation/Camera/Camera');
import World = require('Entities/Game/World');

import ResizeMode = require('Enums/ResizeMode.Enum');
import VideoMode = require('Enums/VideoMode.Enum');
import GameMode = require('Enums/GameMode.Enum');
import Team = require('Enums/Team.Enum');
import Character = require('Enums/Character.Enum');
import Level = require('Enums/Level.Enum');

import Vector = require('Entities/Primitives/Vector.Primitive');
import Point = require('Entities/Primitives/Point.Primitive');
import Size = require('Entities/Primitives/Size.Primitive');
import Rectangle = require('Entities/Primitives/Rectangle.Primitive');

import GameConfiguration = require('Entities/Game/GameConfiguration');
import GameClient = require('Entities/Game/GameClient');
import Deathmatch = require('Entities/Game/Deathmatch');

import BackgroundRender = require('Presentation/Rendering/BackgroundRender');

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
    configuration: {
        videoMode: VideoMode.HQ,
        resizeMode: ResizeMode.Fit,
        origin: new Size(800, 450),
        gravity: new Vector(0, -9.8)
    }
};

// Loader function
// 1: constructs base settings
// 2: returns implementation of GameClient (which parent for Deathmatch, contains )
var game: GameClient = (function () {

    // base settings
    var configuration: GameConfiguration = new GameConfiguration();
    configuration.VideoMode = json.configuration.videoMode;
    configuration.ResizeMode = json.configuration.resizeMode;
    configuration.Gravity = json.configuration.gravity;
    configuration.Origin = json.configuration.origin;

    // implementation of GameClient
    var player = new Player(1, json.player.position, json.player.team, json.player.character);
    var world = new World(json.world.level, json.world.size, json.world.passMap);
    var camera = new Camera();
    var objects = new Array<GameObject>();
    objects.push(player);

    if (json.gameMode === GameMode.Deathmatch) {
        game = new Deathmatch(player, objects, world, camera, configuration);
    }

    // When cache is done...
    $('#game-cache-element').one('resources-loaded', function () {
        // Camera setup
        game.Camera.WatchUserInput(player.Position);

        // TODO: connect user input logic

        // Resize canvaces with content
        BackgroundRender.Resize();
        $(window).on('resize', function () {
            BackgroundRender.Resize();
        });

        // TODO: start background drawing
        
        // TODO: start network phase

        // TODO: initialize and hide HUD
    });

    return game;
})()

//declare var exports: any;
export = game;