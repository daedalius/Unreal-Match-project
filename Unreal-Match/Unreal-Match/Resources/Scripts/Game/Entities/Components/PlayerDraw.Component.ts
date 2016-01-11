import ResourceCache = require('Resources/Scripts/Game/Cache/resource-cache');

import Component = require('Resources/Scripts/Game/Entities/Components/Component');
import PlayerAmmunition = require('Resources/Scripts/Game/Entities/Components/PlayerAmmunition.Component');

import Player = require('Resources/Scripts/Game/Entities/Objects/Player.Object');
import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');
import Fraction = require('Resources/Scripts/Game/Enums/Fraction.Enum');
import Character = require('Resources/Scripts/Game/Enums/Character.Enum');
import Weapon = require('Resources/Scripts/Game/Enums/Weapon.Enum');

import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import NormalizedVector = require('Resources/Scripts/Game/Entities/Primitives/NormalizedVector.Primitive');

abstract class PlayerDrawComponent extends Component {
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
    /** Cached player hands image */
    public HandsSprite: HTMLImageElement;
    /** Cached player legs image */
    public LegsSprite: HTMLImageElement;
    /** Cached player weapon image */
    public WeaponSprite: HTMLImageElement;
    /** Returns weapon offset rate in hand from shoulder */
    protected GetWeaponOffsetFromShoulderSocket = function (): NormalizedVector {
        var weapon = (<PlayerAmmunition>this.Object.GetComponent('PlayerAmmunition')).Current;
        var x = 0;
        var y = 0;
        switch (weapon) {
            case Weapon.Hammer: {
                x = 0.11;
                break;
            }
            case Weapon.Enforcer: {
                x = 0.4;
                break;
            }
            case Weapon.Bio: {
                x = 0.17;
                break;
            }
            case Weapon.Asmd: { break; }
            case Weapon.Link: { break; }
            case Weapon.Minigun: { break; }
            case Weapon.Flak: {
                x = 0.17;
                break;
            }
            case Weapon.Rocket: {
                x = 0.11;
                break;
            }
            case Weapon.Sniper: {
                x = 0.012;
                break;
            }
            case Weapon.Redeemer: { break; }
        }

        return new NormalizedVector(x, y);
    }

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

        // TODO: add cache pick logic for other fractions
        switch ((<Player>(this.Object)).Fraction) {
            case Fraction.Guard: {
                this.BodySprite = ResourceCache.Image['guard-body'];
                this.HandsSprite = ResourceCache.Image['guard-hands'];
                this.LegsSprite = ResourceCache.Image['guard-legs'];
                this.HeadSprite = ((<Player>(this.Object)).Character === Character.Lauren) ? ResourceCache.Image['guard-lauren'] : ResourceCache.Image['guard-blackjack'];
                break;
            }
        }
    }

    /** Draws player */
    public Draw() {
        // Implementation in child classes
    }
}

export = PlayerDrawComponent;