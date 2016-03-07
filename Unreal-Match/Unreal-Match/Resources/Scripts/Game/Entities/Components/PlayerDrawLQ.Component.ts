import PlayerDrawComponent = require('Resources/Scripts/Game/Entities/Components/PlayerDraw.Component');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Player = require('Resources/Scripts/Game/Entities/Objects/Player.Object');

class PlayerDrawLQComponent extends PlayerDrawComponent {
    constructor(object) {
        super(object);
    }

    /** Draws player */
    public Draw() {
        this.DrawBody();
        this.DrawLegs();
        this.DrawHead();
        this.DrawHands();
    }

    private DrawBody() {


    }

    private DrawLegs() {
        var playerPositionWC = this.Object.Position;
        var playerPositionSC = playerPositionWC.Frame();

        var legsStartPointSC = new Point(playerPositionSC.X - 182 / 4, playerPositionSC.Y - 213 / 4);
        this.Context.drawImage(this.LegsSprite,
            // sprite
            0,
            0,
            364 / 4,
            213 / 4,
            // canvas
            legsStartPointSC.X,
            legsStartPointSC.Y,
            364 / 4,
            213 / 4)
    }

    private DrawHead() {

    }

    private DrawHands() {

    }
}

export = PlayerDrawLQComponent;