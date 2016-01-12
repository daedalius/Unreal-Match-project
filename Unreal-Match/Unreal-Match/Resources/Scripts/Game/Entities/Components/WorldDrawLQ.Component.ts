import WorldDrawComponent = require('Resources/Scripts/Game/Entities/Components/WorldDraw.Component');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');

class WorldDrawLQComponent extends WorldDrawComponent {
    constructor() {
        super();
    }

    /** Draws world */
    public Draw() {
        this.DrawForeground();
    }

    private DrawForeground() {
        var game = (<GameClient>window['game']);
        var cameraRectangle = game.Camera.GetRectangle();//.ToScreen();

    }
}

export = WorldDrawLQComponent;