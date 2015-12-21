import game = require('../../GameLoader');
import GameConfiguration = require('../../GameConfiguration');

import GameObject = require('../../Entities/Objects/GameObject');

import Algorithms = require('../../Algorithms');

import Point = require('../../Entities/Primitives/Point.Primitive');
import Vector = require('../../Entities/Primitives/Vector.Primitive');
import Rectangle = require('../../Entities/Primitives/Rectangle.Primitive');

abstract class CameraBahaviour {
    /** Returns correct area to drow as rectangle in OCS */
    public GetRectangle(): Rectangle {
        var camera: Point = this.GetPoint();

        // find x part
        var startX: number = Algorithms.Clamp(camera.X, GameConfiguration.Origin.Width / 2, game.World.Size.Width - GameConfiguration.Origin.Width / 2);
        // find y part
        var startY: number = Algorithms.Clamp(camera.Y, GameConfiguration.Origin.Height / 2, game.World.Size.Height - GameConfiguration.Origin.Height / 2);

        return new Rectangle(new Point(startX, startY), new Point(startX + GameConfiguration.Origin.Width, startY + GameConfiguration.Origin.Height));
    }

    /** Returns current camera point */
    public abstract GetPoint(): Point;

    /** Unsubscribe events, free resources */
    public Dispose() { }
}

export = CameraBahaviour;