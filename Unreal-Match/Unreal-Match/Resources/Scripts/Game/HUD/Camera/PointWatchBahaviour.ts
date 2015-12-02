import CameraBahaviour = require('CameraBahaviour');
import Point = require('../../Entities/Primitives/Point.Primitive');

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