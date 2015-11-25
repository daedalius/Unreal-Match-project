import VideoMode = require('Enums/VideoMode.Enum');
import Team = require('Enums/Team.Enum');
import Character = require('Enums/Character.Enum');

import ResourceLoader = require('Cache/resource-loader');
import Point = require('Entities/Primitives/Point.Primitive');
import GameObject = require('Entities/Objects/GameObject');
import Player = require('Entities/Objects/Player.Object');

class UnrealMatch {
    public static VIDEOMODE: VideoMode = VideoMode.HQ;
    // TODO: add camera strategy (freecam or player watch)
    public static CAMERA: Point;
    public static PLAYER: Player;
    public static OBJECTS: Array<GameObject>;

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

    }

}
export = UnrealMatch;
