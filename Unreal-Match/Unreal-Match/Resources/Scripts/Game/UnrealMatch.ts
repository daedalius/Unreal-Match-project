import VideoMode = require('Enums/VideoMode.Enum');
import Team = require('Enums/Team.Enum');
import Character = require('Enums/Character.Enum');

import Point = require('Entities/Primitives/Point.Primitive');
import Size = require('Entities/Primitives/Size.Primitive');
import Rectangle = require('Entities/Primitives/Rectangle.Primitive');

import GameObject = require('Entities/Objects/GameObject');
import Player = require('Entities/Objects/Player.Object');

import ResourceLoader = require('Cache/resource-loader');

import Camera = require('HUD/Camera/Camera');

class UnrealMatch {
    public static VIDEOMODE: VideoMode = VideoMode.HQ;
    public static PLAYER: Player;
    public static OBJECTS: Array<GameObject>;
    public static LEVEL: Rectangle;
    public static ORIGIN: Size = new Size(800, 450);

    public static Start = function () {
        // Cache resources
        (UnrealMatch.VIDEOMODE === VideoMode.HQ) ? ResourceLoader.LoadHQBundle : ResourceLoader.LoadLQBundle;
        // After cache is done construct other entities
        $('#game-cache-element').one('resources-loaded', function () {
            UnrealMatch.Continue();
        });
    }

    private static Continue = function () {
        UnrealMatch.PLAYER = new Player(1, new Point(100, 100), Team.Red, Character.Lauren);
        UnrealMatch.LEVEL = new Rectangle(new Point(0, 0), new Point(3832, 1422));

        // Camera setup
        Camera.WatchUserInput(new Point(500, 500));
    }

}
export = UnrealMatch;
