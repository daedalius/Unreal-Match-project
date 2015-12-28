import Player = require('Resources/Scripts/Game/Entities/Objects/Player.Object');
import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');
import Component = require('Resources/Scripts/Game/Entities/Components/Component');

import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import NormalizedVector = require('Resources/Scripts/Game/Entities/Primitives/NormalizedVector.Primitive');

class PlayerTransitionComponent extends Component {

    constructor(object: GameObject) {
        super('PlayerTransition', object);
    }

    public Update: Function = function () {
        
    };
}

export = PlayerTransitionComponent;