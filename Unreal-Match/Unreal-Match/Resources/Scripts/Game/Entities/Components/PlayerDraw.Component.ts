import Component = require('Component');

import Player = require('../Objects/Player.Object');
import GameObject = require('../Objects/GameObject');
import Fraction = require('../../Enums/Fraction.Enum');

import Size = require('../Primitives/Size.Primitive');
import NormalizedVector = require('../Primitives/NormalizedVector.Primitive');

abstract class PlayerDrawComponent extends Component {
    /** Players fraction */
    public Fraction: Fraction;

    /** Head size in origin resolution */
    public OriginHeadSize: Size;
    /** Body size in origin resolution */
    public OriginBodySize: Size;
    /** Hands size in origin resolution */
    public OriginHandsSize: Size;
    /** Legs size in origin resolution */
    public OriginLegsSize: Size;
    /** Maximum weapon size in origin resolution */
    public OriginWeaponSize: Size;

    /** Relative position of neck socket on head sprite */
    public NeckSocketOnHead: NormalizedVector;
    /** Relative position of neck socket on body sprite */
    public NeckSocketOnBody: NormalizedVector;
    /** Relative position of shoulder socket on hand sprite */
    public ShoulderSocketOnHand: NormalizedVector;
    /** Relative position of shoulder socket on body sprite */
    public ShoulderSocketOnBody: NormalizedVector;
    /** Relative position of legs socket on body sprite */
    public LegsSocketOnBody: NormalizedVector;

    /** Cached player head image */
    public HeadSprite: HTMLImageElement;
    /** Cached player body image */
    public BodySprite: HTMLImageElement;
    /** Cached player weapon image */
    public WeaponSprite: HTMLImageElement;

    constructor(object: GameObject) {
        super('PlayerDraw', object);

        // TODO: use configuration file
        this.OriginHeadSize = new Size(20, 18);     // after that 2px splitter by y
        this.OriginBodySize = new Size(32, 32);     // after that 2px splitter by y
        this.OriginHandsSize = new Size(34, 14);    // after that 2px splitter by y
        this.OriginLegsSize = new Size(91, 54);     // after that 2px splitter by y
        this.OriginWeaponSize = new Size(55, 20);   // after that 2px splitter by y
        
        this.NeckSocketOnHead = new NormalizedVector(0.5, 0.6);
        this.NeckSocketOnBody = new NormalizedVector(0.5, 0.77);
        this.ShoulderSocketOnHand = new NormalizedVector(0.1, 0.19);
        this.ShoulderSocketOnBody = new NormalizedVector(0.5, 0.25);
        this.LegsSocketOnBody = new NormalizedVector(0.5, 0.867);
    }
}

export = PlayerDrawComponent;