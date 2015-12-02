import GameObject = require('../../Entities/Objects/GameObject');
import UnrealMatch = require('../../UnrealMatch');

import Point = require('../../Entities/Primitives/Point.Primitive');
import Vector = require('../../Entities/Primitives/Vector.Primitive');
import Rectangle = require('../../Entities/Primitives/Rectangle.Primitive');

abstract class CameraBahaviour {
    /** Returns correct area to drow as rectangle in OCS */
    public GetRectangle(): Rectangle {
        var startX: number;
        var startY: number;
        var camera: Point = this.GetPoint();

        // find x part
        var halfOfFrameWidth = UnrealMatch.ORIGIN.Width / 2;

        if (camera.X < halfOfFrameWidth) {
            // close to left
            startX = halfOfFrameWidth;
        }
        else
        {
            if (camera.X > UnrealMatch.LEVEL.Width - halfOfFrameWidth) {
                // close to right
                startX = UnrealMatch.LEVEL.Width - halfOfFrameWidth;
            }
            else {
                // no need any correction
                // TODO: refactor for better CPU prediction
                startX = camera.X;
            }
        }

        // find y part
        var halfOfFrameHeight = UnrealMatch.ORIGIN.Height / 2;

        if (camera.Y < halfOfFrameHeight) {
            // close to bottom
            startY = halfOfFrameHeight;
        }
        else {
            if (camera.Y > UnrealMatch.LEVEL.Height - halfOfFrameHeight) {
                // close to top
                startY = UnrealMatch.LEVEL.Height - halfOfFrameHeight;
            }
            else {
                // no need any correction
                // TODO: refactor for better CPU prediction
                startY = camera.Y;
            }
        }

        return new Rectangle(new Point(startX, startY), new Point(startX + UnrealMatch.ORIGIN.Width, startY + UnrealMatch.ORIGIN.Height));
    }

    /** Returns current camera point */
    public abstract GetPoint(): Point;

    /** Unsubscribe events, free resources */
    public Dispose() { }
}

export = CameraBahaviour;