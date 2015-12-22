import VideoMode = require('Enums/VideoMode.Enum');
import Size = require('Entities/Primitives/Size.Primitive');
import Vector = require('Entities/Primitives/Vector.Primitive');

class GameConfiguration {
    /** Base game resolution */
    public Origin: Size;
    /** Selected video mode: HQ or LQ */
    public VideoMode: VideoMode;
    /** Gravity vector */
    public Gravity: Vector;
}

export = GameConfiguration;