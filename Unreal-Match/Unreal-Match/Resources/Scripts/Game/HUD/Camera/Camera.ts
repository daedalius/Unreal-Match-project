﻿import Point = require('../../Entities/Primitives/Point.Primitive');
import Vector = require('../../Entities/Primitives/Vector.Primitive');
import Rectangle = require('../../Entities/Primitives/Rectangle.Primitive');
import UnrealMatch = require('../../UnrealMatch');
import GameObject = require('../../Entities/Objects/GameObject');

import CameraBahaviour = require('CameraBahaviour');
import FreeCameraBahaviour = require('FreeCameraBahaviour');
import ObjectWatchBahaviour = require('ObjectWatchBahaviour');
import PointWatchBahaviour = require('PointWatchBahaviour');

/** Present camera behaviour. Required map rectangle in UnrealMatch static class */
class Camera {
    private static Behaviour: CameraBahaviour;

    /** Get camera position according selected algorithm (WatchUserInput by default) */
    public static GetCameraPosition(): Point {
        return this.Behaviour.GetPoint();
    }

    /** Returns correct area to drow as rectangle in OCS */
    public static GetRectangle(): Rectangle {
        return Camera.Behaviour.GetRectangle();
    }

    /** Watch for someone GameObject position, then switch to player */
    public static WatchObject(object: GameObject) {
        if (this.Behaviour !== undefined) {
            this.Behaviour.Dispose();
        }
        this.Behaviour = new ObjectWatchBahaviour(object);
    }

    /** Watch for one point */
    public static WatchPoint(point: Point) {
        if (this.Behaviour !== undefined) {
            this.Behaviour.Dispose();
        }
        this.Behaviour = new PointWatchBahaviour(point);
    }

    /** Watch for keyboard arrows, mouse input or swipe */
    public static WatchUserInput(point: Point) {
        if (this.Behaviour !== undefined) {
            this.Behaviour.Dispose();
        }
        this.Behaviour = new FreeCameraBahaviour(point);
    }
}

export = Camera;