import GameObject = require('../../Entities/Objects/GameObject');
import UnrealMatch = require('../../UnrealMatch');

import Algorithms = require('../../Algorithms');

import Point = require('../../Entities/Primitives/Point.Primitive');
import Vector = require('../../Entities/Primitives/Vector.Primitive');
import Rectangle = require('../../Entities/Primitives/Rectangle.Primitive');

abstract class CameraBahaviour {
    /** Returns correct area to drow as rectangle in OCS */
    public GetRectangle(): Rectangle {
        var camera: Point = this.GetPoint();

        // find x part
        var startX: number = Algorithms.Clamp(camera.X, UnrealMatch.ORIGIN.Width / 2, UnrealMatch.LEVEL.Width - UnrealMatch.ORIGIN.Width / 2);
        // find y part
        var startY: number = Algorithms.Clamp(camera.Y, UnrealMatch.ORIGIN.Height / 2, UnrealMatch.LEVEL.Height - UnrealMatch.ORIGIN.Height / 2);

        return new Rectangle(new Point(startX, startY), new Point(startX + UnrealMatch.ORIGIN.Width, startY + UnrealMatch.ORIGIN.Height));
    }

    /** Returns current camera point */
    public abstract GetPoint(): Point;

    /** Unsubscribe events, free resources */
    public Dispose() { }
}

export = CameraBahaviour;