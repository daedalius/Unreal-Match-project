﻿import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');
import Player = require('Resources/Scripts/Game/Entities/Objects/Player.Object');

import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');
import World = require('Resources/Scripts/Game/Entities/Game/World');

import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');
import GameMode = require('Resources/Scripts/Game/Enums/GameMode.Enum');
import Team = require('Resources/Scripts/Game/Enums/Team.Enum');
import Character = require('Resources/Scripts/Game/Enums/Character.Enum');
import Level = require('Resources/Scripts/Game/Enums/Level.Enum');

import Vector = require('Resources/Scripts/Game/Entities/Primitives/Vector.Primitive');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Rectangle = require('Resources/Scripts/Game/Entities/Primitives/Rectangle.Primitive');

import GameConfiguration = require('Resources/Scripts/Game/Entities/Game/GameConfiguration');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import Deathmatch = require('Resources/Scripts/Game/Entities/Game/Deathmatch');

import Render = require('Resources/Scripts/Game/Presentation/Rendering/Render');

import ResourceLoader = require('Resources/Scripts/Game/Cache/resource-loader');

var json = {
    player: {
        character: Character.Lauren,
        team: Team.Red,
        position: new Point(1323, 700)
    },
    world: {
        level: Level.RisingSun,
        size: new Size(2874, 1067),
        passMap: [],
        foregroundRatio: 0.666667,
        // means how many times level in HQ bigger than his size
        mapQuality: 2
    },
    gameMode: GameMode.Deathmatch,
    configuration: {
        videoMode: VideoMode.HQ,
        origin: new Size(800, 450),
        gravity: new Vector(0, -9.8)
    }
};

// Loader function
// 1: constructs base settings
// 2: returns implementation of GameClient (which parent for Deathmatch, contains )
(function () {

    // base settings
    var configuration: GameConfiguration = new GameConfiguration();
    configuration.VideoMode = json.configuration.videoMode;
    configuration.Gravity = json.configuration.gravity;
    configuration.Origin = json.configuration.origin;
    configuration.Relative = null;

    // TODO: think about better decision
    // Temp configuration for crating entities
    window['game'] = {
        'Configuration': configuration
    };

    // TODO: separate this
    ResourceLoader.LoadBaseBundle(json.configuration.videoMode);
    ResourceLoader.LoadLevelBundle(json.configuration.videoMode, json.world.level);

    // When cache is done...
    $('#game-cache-element').one('resources-loaded', function () {

        // implementation of GameClient
        var player = new Player(1, json.player.position, json.player.team, json.player.character);
        var world = new World(json.world.level, json.world.size, json.world.passMap, json.world.mapQuality, json.world.foregroundRatio);
        var camera = new Camera();
        var objects = new Array<GameObject>();
        objects.push(player);

        if (json.gameMode === GameMode.Deathmatch) {
            window['game'] = new Deathmatch(player, objects, world, camera, configuration);
        }
        var game = window['game'];

        // Camera setup
        game.Camera.WatchUserInput(new Point(player.Position.X, player.Position.Y));

        // TODO: connect user input logic

        // Resize canvaces with content
        Render.ResizeCanvaces();
        $(window).on('resize', function () {
            Render.ResizeCanvaces();
        });

        // Start drawing
        Render.DrawScene();

        // TODO: start network phase

        // TODO: initialize and hide HUD
    });
})()