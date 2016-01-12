/// <reference path="../../presentation/camera/camera.ts" />
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');

class DeathMatch extends GameClient {
    constructor(player, objects, world, camera, configuration) {
        super(player, objects, world, camera, configuration);
    }
}

export = DeathMatch;