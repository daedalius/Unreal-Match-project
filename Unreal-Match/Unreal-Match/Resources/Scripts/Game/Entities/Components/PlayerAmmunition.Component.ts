import Component = require('Component');

import Player = require('../Objects/Player.Object');
import GameObject = require('../Objects/GameObject');


import Weapon = require('../../Enums/Weapon.Enum');

class PlayerAmmunition extends Component {
    public Current: Weapon;

    constructor(object: GameObject) {
        super('PlayerAmmunition', object);
    }
}

export = PlayerAmmunition;