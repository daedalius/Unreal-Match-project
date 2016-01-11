import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');

import Level = require('Resources/Scripts/Game/Enums/Level.Enum')
import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');

import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import ComponentContainer = require('Resources/Scripts/Game/Entities/Components/ComponentContainer');

class World extends ComponentContainer {
    /** Game level */
    public Level: Level;
    /** World size*/
    public Size: Size;
    /** Size of foreground relatively level width */
    public ForegroundRatio: number;
    /** Worlds passability map */
    public PassMap: Array<Array<boolean>>

    constructor(level, size, passMap) {
        super();
        this.Level = level;
        this.Size = size;
        this.PassMap = passMap;

        var game = <GameClient>window['game'];
        this.AddComponent(game.Configuration.VideoMode === VideoMode.LQ ? new PlayerDrawLQComponent(this) : new PlayerDrawHQComponent(this));
    }
}

export = World;