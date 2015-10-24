import NormalizedVector = require('normalized-vector');

/** Present two-dimentional vector */
class Vector {

    /** X-axis vector component */
    public X: number;
    /** Y-axis vector component */
    public Y: number;

    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }
        
    /** Return multiplied by number current vector */
    public Multiply(num: number): Vector {
        return new Vector(this.X * num, this.Y * num);
    }

    /** Return vector length */
    public Length(): number {
        var hypotenuse: number = Math.sqrt(this.X * this.X + this.Y * this.Y);

        // If this is a normalized vector (fix genius js math)
        if (Math.abs(1 - hypotenuse) < 0.001) {
            return 1;
        }

        return hypotenuse;
    }

    /** Normalize vector (which length is equal to 1) */
    public Normalize(): Vector {
        var length: number = this.Length();
        return new NormalizedVector(this.X / length, this.Y / length);
    }
}

export = Vector;
