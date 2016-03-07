import Vector = require('Resources/Scripts/Game/Entities/Primitives/Vector.Primitive');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');

/** Present a point in two-dimentional space */
class Point {

    /** X-axis vector component */
    public X: number;
    /** Y-axis vector component */
    public Y: number;

    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    /** Returned converted point in Cortesial CS to Screen CS for presentation on canvas */
    public ToScreen(): Point {
        return new Point(this.X, (<GameClient>window['game']).Configuration.Relative.Height - this.Y);
    }

    // Convert this point in Cortesial CS to Screen CS for presentation on canvas
    public ConvertToScreen(canvasHeight: number) {
        this.Y = canvasHeight - this.Y;
    }

    /** Performs framing transformation */
    public Frame(): Point {
        var game = (<GameClient>window['game']);
        var cameraRectangle = game.Camera.GetRectangle();

        var x: number = (this.X - cameraRectangle.Start.X) / game.Configuration.Origin.Width * game.Configuration.Relative.Width;
        var y: number = game.Configuration.Relative.Height - (this.Y - cameraRectangle.Start.Y) / game.Configuration.Origin.Height * game.Configuration.Relative.Height;

        return new Point(x, y);
    }

    // Subtraction points is a vector
    public Substract(subtrahend: Point): Vector {
        return new Vector(this.X - subtrahend.X, this.Y - subtrahend.Y);
    }

    // Add vector operations
    public AddVector(vector: Vector) {
        this.X += vector.X;
        this.Y += vector.Y;
    }

    /** Returns bool value of point equality */
    public Equals(otherPoint: Point) {
        return this === otherPoint || (this.X === otherPoint.X && this.Y === otherPoint.Y);
    }
}

export = Point;
