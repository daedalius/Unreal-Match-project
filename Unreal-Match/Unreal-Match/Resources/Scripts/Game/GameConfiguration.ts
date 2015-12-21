import VideoMode = require('Enums/VideoMode.Enum');
import Size = require('Entities/Primitives/Size.Primitive');

class GameConfiguration {
    /** Base game resolution */
    public static Origin: Size = new Size(800, 450);
    /** Selected video mode: HQ or LQ */
    public static VideoMode: VideoMode;
}

export = GameConfiguration;