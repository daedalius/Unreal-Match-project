import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');

import Character = require('Resources/Scripts/Game/Enums/Character.Enum');
import Team = require('Resources/Scripts/Game/Enums/Team.Enum');
import Fraction = require('Resources/Scripts/Game/Enums/Fraction.Enum');

import PlayerTransitionComponent = require('Resources/Scripts/Game/Entities/Components/PlayerTransition.Component');
import PlayerDrawComponent = require('Resources/Scripts/Game/Entities/Components/PlayerDraw.Component');

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
        // [TODO] Use fabric to create necessary render component
    }
}

export = Player;