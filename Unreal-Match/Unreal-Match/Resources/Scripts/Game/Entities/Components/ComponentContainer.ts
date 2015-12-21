import Component = require('../Components/Component');

/** Presents component containing and implements base methods to manipulate them */
abstract class ComponentContainer {
    /** All components of this object */
    private Components: Array<Component>;

    constructor() {
        this.Components = new Array<Component>();
    }

    /** Get component of GameObject by name */
    public GetComponent = function (name: string): Component {
        this.Components.forEach(function (itemComponent, index) {
            if (itemComponent.Name === name) {
                return itemComponent;
            }
        });

        return null;
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
}

export = ComponentContainer;