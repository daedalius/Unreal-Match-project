﻿import PlayerDrawComponent = require('Resources/Scripts/Game/Entities/Components/PlayerDraw.Component');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');

class PlayerDrawHQComponent extends PlayerDrawComponent {
    constructor(object) {
        super(object);
    }
}

export = PlayerDrawHQComponent;