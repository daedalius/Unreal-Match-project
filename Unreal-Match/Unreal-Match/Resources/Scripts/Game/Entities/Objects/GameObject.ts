import Component = require('../Components/Component');
import Point = require('../Primitives/Point.Primitive');

abstract class GameObject {
    /** Unical object identifier in game */
    public Id: number;
    /** Point which are positioning object on map */
    public Position: Point;
    /** All components of this object */
    private Components: Array<Component>;

    /** Get component of GameObject by name */
    public GetComponent = function (name: string) {
        this.Components.forEach(function (itemComponent, index) {
            if (name === itemComponent.Name) {
                return itemComponent;
            }
        });
    }

    /** Add component to GameObject */
    public AddComponent = function (component: Component) {
        // check for existed component
        this.Components.forEach(function (itemComponent, index) {
            if (component.Name === itemComponent.Name) {
                throw new Error('Component with "' + component.Name + '" already exists in object');
            }
        });

        this.Components.push(component);
    }

    constructor(id: number, position: Point) {
        this.Id = id;
        this.Position = position;
        this.Components = new Array<Component>();
    }
}

export = GameObject;
