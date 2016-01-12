import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import ScreenRectangle = require('Resources/Scripts/Game/Entities/Primitives/ScreenRectangle.Primitive');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');

/** Presents rectangle in Cartesian CS */
class Rectangle {

    /** Start rectangle point. Placed before and upper than end point (by Cartesian CS) */
    public Start: Point;
    /** End rectangle point. Placed after and lower than start point (by Cartesian CS) */
    private end: Point;
    /** Get endpoint */
    get End(): Point {
        return this.end;
    }
    /** Set endpoint manually */
    set End(value: Point) {
        if (this.Start.X >= value.X || this.Start.Y <= value.Y) {
            throw new Error("Can`t set endpoint (" + value.X + ',' + value.Y + ') for rectangle with startpoint  (' + this.Start.X + ',' + this.Start.Y + ')');
        }
        else {
            this.end = value;
        }
    }

    /** Rectangle width */
    get Width(): number {
        return this.end.X - this.Start.X;
    }
    /** Set rectangle width manually */
    set Width(value: number) {
        if (value <= 0) {
            throw new Error('Width of rectangle cannot be equal or less than zero');
        }

        this.end.X = this.Start.X + value;
    }

    /** Rectangle height */
    get Height(): number {
        return this.Start.Y - this.end.Y;
    }
    /** Set rectangle height manually */
    set Height(value: number) {
        if (value <= 0) {
            throw new Error('Height of rectangle cannot be equal or less than zero');
        }

        this.end.Y = this.Start.Y - value;
    }

    constructor(startPoint: Point, endPoint: Point) {
        this.Start = startPoint;
        this.end = endPoint;
    }

    /** Convert this rectangle in Cortesial CS to Screen CS for presentation on canvas */
    ToScreen(): ScreenRectangle {
        var newStartPoint: Point = new Point(this.Start.X, (<GameClient>window['game']).Configuration.Relative.Height - this.Start.Y);
        var newEndPoint: Point = new Point(this.End.X, (<GameClient>window['game']).Configuration.Relative.Height - this.End.Y);

        return new ScreenRectangle(newStartPoint, newEndPoint);
    }
}

export = Rectangle;
