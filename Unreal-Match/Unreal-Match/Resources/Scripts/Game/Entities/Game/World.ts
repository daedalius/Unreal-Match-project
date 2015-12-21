import Level = require('../../Enums/Level.Enum')
import Size = require('../Primitives/Size.Primitive');

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