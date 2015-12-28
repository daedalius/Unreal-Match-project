import ResizeMode = require('Resources/Scripts/Game/Enums/ResizeMode.Enum');
import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Vector = require('Resources/Scripts/Game/Entities/Primitives/Vector.Primitive');

class GameConfiguration {
    /** Base game resolution */
    public Origin: Size;
    /** Current game resolution */
    public Relative: Size;
    /** Selected video mode: HQ or LQ */
    public VideoMode: VideoMode;
    /** Resize mode */
    public ResizeMode: ResizeMode;
    /** Gravity vector */
    public Gravity: Vector;
}

export = GameConfiguration;