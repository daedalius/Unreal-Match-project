import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');

import Level = require('Resources/Scripts/Game/Enums/Level.Enum')
import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');

import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import ComponentContainer = require('Resources/Scripts/Game/Entities/Components/ComponentContainer');
import WorldDrawLQComponent = require('Resources/Scripts/Game/Entities/Components/WorldDrawLQ.Component');
import WorldDrawHQComponent = require('Resources/Scripts/Game/Entities/Components/WorldDrawHQ.Component');

class World extends ComponentContainer {
    /** Game level */
    public Level: Level;
    /** World size*/
    public Size: Size;
    /** Size of foreground relatively level width */
    public ForegroundRatio: number;
    /** Worlds passability map */
    public PassMap: Array<Array<boolean>>

    constructor(level, size, passMap, foregroundRatio) {
        super();
        this.Level = level;
        this.Size = size;
        this.PassMap = passMap;
        this.ForegroundRatio = foregroundRatio;

        var game = <GameClient>window['game'];
        this.AddComponent(game.Configuration.VideoMode === VideoMode.LQ ? new WorldDrawLQComponent() : new WorldDrawHQComponent());
    }
}

export = World;