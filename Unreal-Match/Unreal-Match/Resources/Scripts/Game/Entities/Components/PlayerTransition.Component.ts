import Player = require('../Objects/Player.Object');
import GameObject = require('../Objects/GameObject');
import Component = require('Component');

import Point = require('../Primitives/Point.Primitive');
import NormalizedVector = require('../Primitives/NormalizedVector.Primitive');

class PlayerTransitionComponent extends Component {

    constructor(object: GameObject) {
        super('PlayerTransition', object);
    }

    public Update: Function = function () {
        
    };
}

export = PlayerTransitionComponent;