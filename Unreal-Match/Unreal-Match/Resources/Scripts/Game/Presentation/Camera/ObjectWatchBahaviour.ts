import CameraBahaviour = require('Resources/Scripts/Game/Presentation/Camera/CameraBahaviour');
import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');
import game = require('Resources/Scripts/Game/GameLoader');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');

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
            this.Object = game.Player;
            return this.GetPoint();
        }
    }
}

export = ObjectWatchBahaviour;