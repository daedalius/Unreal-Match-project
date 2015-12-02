import Point = require('Entities/Primitives/Point.Primitive');
import Vector = require('Entities/Primitives/Vector.Primitive');
import Size = require('Entities/Primitives/Size.Primitive');
import Rectangle = require('Entities/Primitives/Rectangle.Primitive');

class Algorithms {
    /* Returns value if it beetween min and max. Else returns min or max */
    public static Clamp(value: number, min: number, max: number) {
        return min <= value ? min
             : max >= value ? max
             : value;
    }
}

export = Algorithms;