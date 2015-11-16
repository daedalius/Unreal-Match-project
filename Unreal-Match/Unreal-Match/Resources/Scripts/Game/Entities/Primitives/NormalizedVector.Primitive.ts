import Vector = require('Vector.Primitive')

/** Present two-dimentional vector */
class NormalizedVector extends Vector {

    constructor(x, y) {
        super(x, y);
    }

    /** Return vector length */
    public Length(): number {
        return 1;
    }

    /** Return new vector which components substracted from 1 */
    public SubstractFromOne() {
        return new NormalizedVector(1 - this.X, 1 - this.Y);
    }
}

export = NormalizedVector;
