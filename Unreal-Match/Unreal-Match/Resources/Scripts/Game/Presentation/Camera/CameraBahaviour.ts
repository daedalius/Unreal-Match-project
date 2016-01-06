import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import GameConfiguration = require('Resources/Scripts/Game/Entities/Game/GameConfiguration');

import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');

import Algorithms = require('Resources/Scripts/Game/Algorithms');

import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Vector = require('Resources/Scripts/Game/Entities/Primitives/Vector.Primitive');
import Rectangle = require('Resources/Scripts/Game/Entities/Primitives/Rectangle.Primitive');

abstract class CameraBahaviour {
    /** Returns correct area to drow as rectangle in OCS */
    public GetRectangle(): Rectangle {
        var camera: Point = this.GetPoint();
        var game = (<GameClient>window['game']);
        // find x part
        var startX: number = Algorithms.Clamp(camera.X, game.Configuration.Origin.Width / 2, game.World.Size.Width - game.Configuration.Origin.Width / 2);
        // find y part
        var startY: number = Algorithms.Clamp(camera.Y, game.Configuration.Origin.Height / 2, game.World.Size.Height - game.Configuration.Origin.Height / 2);

        return new Rectangle(new Point(startX, startY), new Point(startX + game.Configuration.Origin.Width, startY + game.Configuration.Origin.Height));
    }

    /** Returns current camera point */
    public abstract GetPoint(): Point;

    /** Unsubscribe events, free resources */
    public Dispose() { }
}

export = CameraBahaviour;