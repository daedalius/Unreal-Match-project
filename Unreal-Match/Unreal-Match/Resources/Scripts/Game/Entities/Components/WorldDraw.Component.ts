import ResourceCache = require('Resources/Scripts/Game/Cache/resource-cache');

import Component = require('Resources/Scripts/Game/Entities/Components/Component');
import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');

import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import NormalizedVector = require('Resources/Scripts/Game/Entities/Primitives/NormalizedVector.Primitive');

abstract class WorldDrawComponent extends Component {
    public ForegroundImage: HTMLImageElement;
    public ForegroundContext: CanvasRenderingContext2D;

    public LevelImage: HTMLImageElement;
    public LevelContext: CanvasRenderingContext2D;
    
    private static PreviousCameraPosition: Point;

    constructor() {
        super('WorldDraw', null);

        this.LevelImage = ResourceCache.Image['map'][0];
        this.LevelContext = (<HTMLCanvasElement>document.getElementById('game-canvas-level')).getContext('2d');

        this.Update = this.Draw;
    }

    /** Draws world */
    public Draw() {
        throw new Error('Behavior are not implemented. Called abstracts class method.')
    }
}

export = WorldDrawComponent;