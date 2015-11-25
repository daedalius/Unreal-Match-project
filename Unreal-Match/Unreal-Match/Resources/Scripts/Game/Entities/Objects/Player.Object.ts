import GameObject = require('GameObject');

import Character = require('../../Enums/Character.Enum');
import Team = require('../../Enums/team.Enum');
import Fraction = require('../../Enums/Fraction.Enum');

import PlayerTransitionComponent = require('../Components/PlayerTransition.Component');
import PlayerDrawComponent = require('../Components/PlayerDraw.Component');

import Size = require('../Primitives/Size.Primitive');
import Point = require('../Primitives/Point.Primitive');
import NormalizedVector = require('../Primitives/NormalizedVector.Primitive');

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