import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');

/** Base component class */
abstract class Component {
    /** Reverse refference on object which are contains current component */
    public Object: GameObject;
    /** Components name */
    public Name: string;
    /** Deactivated components doesn't call by trigger function */
    public Activated: boolean;
    /** Component update function */
    public Update: Function;
    /** Triggers update function if component are active */
    public Trigger: Function;

    constructor(name: string, object: GameObject) {
        this.Name = name;
        this.Object = object;
        this.Activated = true;
        this.Update = function () {
            console.log('Component has done nothing')
        };
        this.Trigger = function () {
            if (this.Activated) {
                this.Update();
            }
        }
    }
}

export = Component;