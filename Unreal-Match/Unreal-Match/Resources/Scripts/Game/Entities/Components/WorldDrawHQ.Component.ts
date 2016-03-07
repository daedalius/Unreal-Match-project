import ResourceCache = require('Resources/Scripts/Game/Cache/resource-cache');
import WorldDrawComponent = require('Resources/Scripts/Game/Entities/Components/WorldDraw.Component');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');

class WorldDrawHQComponent extends WorldDrawComponent {
    constructor() {
        super();
        this.ForegroundImage = ResourceCache.Image['foreground'][0];
        this.ForegroundContext = (<HTMLCanvasElement>document.getElementById('game-canvas-foreground')).getContext('2d');
    }

    /** Draws world */
    public Draw() {
        this.DrawForeground();
        this.DrawLevel();
    }

    private DrawForeground() {
        /*
        // Cleaning canvas
        var game = (<GameClient>window['game']);
        this.ForegroundContext.clearRect(0, 0, game.Configuration.Relative.Width, game.Configuration.Relative.Height);

        // Drawing
        // INFO: check sizes with rather than rising sun foreground
        var cameraStart = game.Camera.GetRectangle().Start;
        var mult = (game.World.Size.Width - game.Configuration.Origin.Width) / game.World.Size.Width;
        this.ForegroundContext.drawImage(this.ForegroundImage,
            // begin of drawing image
            cameraStart.X * game.World.MapQuality * game.World.MapQuality * game.World.ForegroundRatio * mult, (game.World.Size.Height - cameraStart.Y - game.Configuration.Origin.Height) * game.World.MapQuality * game.World.MapQuality * game.World.ForegroundRatio,
            // size of drawing image
            game.Configuration.Origin.Width / game.World.ForegroundRatio, game.Configuration.Origin.Height / game.World.ForegroundRatio,
            // zero offsets
            0, 0,
            // size of image on canvas
            game.Configuration.Relative.Width, game.Configuration.Relative.Height);
        */
    }

    private DrawLevel() {
        // Cleaning canvas
        var game = (<GameClient>window['game']);
        this.LevelContext.clearRect(0, 0, game.Configuration.Relative.Width, game.Configuration.Relative.Height);

        // Drawing
        var cameraStart = game.Camera.GetRectangle().Start;

        this.LevelContext.drawImage(this.LevelImage,
            cameraStart.X * game.World.MapQuality, (game.World.Size.Height - cameraStart.Y - game.Configuration.Origin.Height) * game.World.MapQuality,
            game.Configuration.Origin.Width * game.World.MapQuality, game.Configuration.Origin.Height * game.World.MapQuality,
            0, 0,
            game.Configuration.Relative.Width, game.Configuration.Relative.Height);
    }
}

export = WorldDrawHQComponent;