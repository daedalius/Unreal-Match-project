import ResourceCache = require('Resources/Scripts/Game/Cache/resource-cache');

import Component = require('Resources/Scripts/Game/Entities/Components/Component');
import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');

import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import NormalizedVector = require('Resources/Scripts/Game/Entities/Primitives/NormalizedVector.Primitive');

abstract class WorldDrawComponent extends Component {
    public ForegroundImage: HTMLImageElement;
    public LevelImage: HTMLImageElement;

    private static PreviousCameraPosition: Point;

    constructor() {
        super('WorldDraw', null);
        this.ForegroundImage = ResourceCache.Image['foreground'];
        this.LevelImage = ResourceCache.Image['map'];
    }

    /** Draws world */
    public Draw() {
        // Implementation in child classes
    }
}

export = WorldDrawComponent;