import CameraBahaviour = require('Resources/Scripts/Game/Presentation/Camera/CameraBahaviour');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');

/** Simple point view camera */
class PointWatchBahaviour extends CameraBahaviour {
    private Point: Point;

    constructor(point: Point) {
        super();
        this.Point = point;
    }

    public GetPoint(): Point {
        return this.Point;
    }
}

export = PointWatchBahaviour;