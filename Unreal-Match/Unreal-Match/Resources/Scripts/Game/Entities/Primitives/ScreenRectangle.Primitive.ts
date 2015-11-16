import Point = require('Point.Primitive');

/** Presents rectangle in Screen CS */
class ScreenRectangle {
        
    /** Start rectangle point. Placed before and lower than end point (by Screen CS) */
    public Start: Point;
    /** End rectangle point. Placed after and upper than start point (by Screen CS) */
    private end: Point;
    /** Get endpoint */
    get End(): Point {
        return this.end;
    }
    /** Set endpoint manually */
    set End(value: Point) {
        if (this.Start.X <= value.X || this.Start.Y >= value.Y) {
            throw new Error("Can`t set endpoint (" + value.X + ',' + value.Y + ') for SCREEN rectangle with startpoint  (' + this.Start.X + ',' + this.Start.Y + ')');
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
        return this.end.Y - this.Start.Y;
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
}

export = ScreenRectangle;
