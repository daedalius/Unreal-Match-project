import Component = require('Resources/Scripts/Game/Entities/Components/Component');

import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');
import Player = require('Resources/Scripts/Game/Entities/Objects/Player.Object');

import Weapon = require('Resources/Scripts/Game/Enums/Weapon.Enum');

class PlayerAmmunition extends Component {
    public Current: Weapon;

    constructor(object: GameObject) {
        super('PlayerAmmunition', object);
    }
}

export = PlayerAmmunition;