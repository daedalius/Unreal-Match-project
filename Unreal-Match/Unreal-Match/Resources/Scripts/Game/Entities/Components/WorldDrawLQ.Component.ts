import WorldDrawComponent = require('Resources/Scripts/Game/Entities/Components/WorldDraw.Component');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');

class WorldDrawLQComponent extends WorldDrawComponent {
    constructor() {
        super();
    }

    /** Draws world */
    public Draw() {
        this.DrawLevel();
    }

    private DrawLevel() {
        // Cleaning canvas
        var game = (<GameClient>window['game']);
        this.LevelContext.clearRect(0, 0, game.Configuration.Origin.Width, game.Configuration.Origin.Height);

        // Draws piece of level
        var cameraStart = game.Camera.GetRectangle().Start;
        this.LevelContext.drawImage(this.LevelImage,
            cameraStart.X, game.World.Size.Height - cameraStart.Y - game.Configuration.Origin.Height,
            game.Configuration.Origin.Width, game.Configuration.Origin.Height,
            0, 0,
            game.Configuration.Origin.Width, game.Configuration.Origin.Height);
    }
}

export = WorldDrawLQComponent;