import PlayerDrawComponent = require('Resources/Scripts/Game/Entities/Components/PlayerDraw.Component');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Player = require('Resources/Scripts/Game/Entities/Objects/Player.Object');
import Team = require('Resources/Scripts/Game/Enums/Team.Enum');

class PlayerDrawLQComponent extends PlayerDrawComponent {
    constructor(object) {
        super(object);

        switch ((<Player>(this.Object)).Team) {
            case Team.None: {
                this.TeamColorLegsYOffset = 0;
                break;
            }
            case Team.Red: {
                // 2px Y splitter in LQ
                this.TeamColorLegsYOffset = this.OriginLegsSize.Height + 2;
                this.TeamColorBodyYOffset = this.OriginBodySize.Height + 2;
                break;
            }
            case Team.Blue: {
                // 2px Y splitter in LQ
                this.TeamColorLegsYOffset = (this.OriginLegsSize.Height + 2) * 2;
                this.TeamColorBodyYOffset = (this.OriginBodySize.Height + 2) * 2;
                break;
            }
            case Team.Green: {
                // 2px Y splitter in LQ
                this.TeamColorLegsYOffset = (this.OriginLegsSize.Height + 2) * 3;
                this.TeamColorBodyYOffset = (this.OriginBodySize.Height + 2) * 3;
                break;
            }
            case Team.Gold: {
                // 2px Y splitter in LQ
                this.TeamColorLegsYOffset = (this.OriginLegsSize.Height + 2) * 4;
                this.TeamColorBodyYOffset = (this.OriginBodySize.Height + 2) * 4;
                break;
            }
        }
    }

    /** Draws player */
    public Draw() {
        this.DrawBody();
        this.DrawLegs();
        this.DrawHead();
        this.DrawHands();
    }

    private DrawBody() {
        var playerPositionWC = this.Object.Position;
        var playerPositionSC = playerPositionWC.Frame();

        var legsSocketPointSC = new Point(playerPositionSC.X, playerPositionSC.Y - this.OriginLegsSize.Height);
        var bodyStartPointSC = new Point(legsSocketPointSC.X - this.OriginBodySize.Width / 2, legsSocketPointSC.Y - this.OriginBodySize.Height * this.LegsSocketOnBody.Y);

        this.Context.drawImage(this.BodySprite,
            // sprite
            0,
            0,
            this.OriginBodySize.Width,
            this.OriginBodySize.Height,
            // canvas
            bodyStartPointSC.X,
            bodyStartPointSC.Y,
            this.OriginBodySize.Width,
            this.OriginBodySize.Height)

        // blend team colors
        this.Context.drawImage(this.BodySprite,
            // sprite
            0,
            this.TeamColorBodyYOffset,
            this.OriginBodySize.Width,
            this.OriginBodySize.Height,
            // canvas
            bodyStartPointSC.X,
            bodyStartPointSC.Y,
            this.OriginBodySize.Width,
            this.OriginBodySize.Height)
    }

    private DrawLegs() {
        var playerPositionWC = this.Object.Position;
        var playerPositionSC = playerPositionWC.Frame();

        var legsStartPointSC = new Point(playerPositionSC.X - this.OriginLegsSize.Width / 2, playerPositionSC.Y - this.OriginLegsSize.Height);
        this.Context.drawImage(this.LegsSprite,
            // sprite
            0,
            0,
            this.OriginLegsSize.Width,  // 364 / 4,
            this.OriginLegsSize.Height, //213 / 4,
            // canvas
            legsStartPointSC.X,
            legsStartPointSC.Y,
            this.OriginLegsSize.Width,  // 364 / 4,
            this.OriginLegsSize.Height) //213 / 4

        // blend team colors
        this.Context.drawImage(this.LegsSprite,
            // sprite
            0,
            this.TeamColorLegsYOffset,
            this.OriginLegsSize.Width,
            this.OriginLegsSize.Height,
            // canvas
            legsStartPointSC.X,
            legsStartPointSC.Y,
            this.OriginLegsSize.Width,
            this.OriginLegsSize.Height)
    }

    private DrawHead() {

    }

    private DrawHands() {

    }
}

export = PlayerDrawLQComponent;