import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');

import Character = require('Resources/Scripts/Game/Enums/Character.Enum');
import Team = require('Resources/Scripts/Game/Enums/Team.Enum');
import Fraction = require('Resources/Scripts/Game/Enums/Fraction.Enum');
import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');

import PlayerTransitionComponent = require('Resources/Scripts/Game/Entities/Components/PlayerTransition.Component');
import PlayerDrawComponent = require('Resources/Scripts/Game/Entities/Components/PlayerDraw.Component');
import PlayerDrawLQComponent = require('Resources/Scripts/Game/Entities/Components/PlayerDrawLQ.Component');
import PlayerDrawHQComponent = require('Resources/Scripts/Game/Entities/Components/PlayerDrawHQ.Component');

import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import NormalizedVector = require('Resources/Scripts/Game/Entities/Primitives/NormalizedVector.Primitive');

/** Presents player entity */
class Player extends GameObject {
    /** Players team in current game */
    public Team: Team;
    /** Players character */
    public Character: Character; 
    /** Character fraction */
    public Fraction: Fraction;

    constructor(id: number, position: Point, team: Team, character: Character) {
        super(id, position);
        var game = <GameClient>window['game'];
        this.AddComponent(game.Configuration.VideoMode === VideoMode.LQ ? new PlayerDrawLQComponent(this) : new PlayerDrawHQComponent(this));
    }
}

export = Player;