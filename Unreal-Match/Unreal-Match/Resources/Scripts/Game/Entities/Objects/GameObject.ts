import ComponentContainer = require('../Components/ComponentContainer');
import Point = require('../Primitives/Point.Primitive');

abstract class GameObject extends ComponentContainer {
    /** Unical object identifier in game */
    public Id: number;
    /** Point which are positioning object on map */
    public Position: Point;

    constructor(id: number, position: Point) {
        super();
        this.Id = id;
        this.Position = position;
    }
}

export = GameObject;
