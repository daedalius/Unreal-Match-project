import Level = require('Resources/Scripts/Game/Enums/Level.Enum')
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');

class World {
    /** Game level */
    public Level: Level;
    /** World size*/
    public Size: Size;
    /** Worlds passability map */
    public PassMap: Array<Array<boolean>>

    constructor(level, size, passMap) {
        this.Level = level;
        this.Size = size;
        this.PassMap = passMap;
    }
}

export = World;