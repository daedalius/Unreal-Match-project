import CameraBahaviour = require('CameraBahaviour');
import GameObject = require('../../Entities/Objects/GameObject');
import UnrealMatch = require('../../UnrealMatch');
import Point = require('../../Entities/Primitives/Point.Primitive');

/** This camera watching for selected object or current player (if object gone) */
class ObjectWatchBahaviour extends CameraBahaviour {
    private Object: GameObject;

    constructor(object: GameObject) {
        super();
        this.Object = object;
    }

    /** Return watched object position or switch for player */
    public GetPoint(): Point {
        if (Object) {
            return this.Object.Position;
        }
        else {
            this.Object = UnrealMatch.PLAYER;
            return this.GetPoint();
        }
    }
}

export = ObjectWatchBahaviour;