import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import Algorithms = require('Resources/Scripts/Game/Algorithms');
import CameraBahaviour = require('Resources/Scripts/Game/Presentation/Camera/CameraBahaviour');
import GameObject = require('Resources/Scripts/Game/Entities/Objects/GameObject');

import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Vector = require('Resources/Scripts/Game/Entities/Primitives/Vector.Primitive');

/** A free view camera for whole level watching. Required Dispose call afer use! */
class FreeCameraBahaviour extends CameraBahaviour {
    private LastPositon: Point;
    private Augmentation: Vector = new Vector(0, 0);

    constructor(startPoint: Point) {
        super();
        this.LastPositon = startPoint;
        this.SubscribeOnMouseInput();
        this.SubscribeOnKeyboardInput();
        //this.SubscribeOnTouchInput();
    }

    public GetPoint(): Point {
        return this.LastPositon;
    }

    /** Unsubscribe from all input events (.camera postfix) */
    public Dispose() {
        this.UnsubscribeFromMouseInput();
        this.UnsubscribeFromKeyboardInput();
        //this.UnsubscribeFromTouchInput();
    }

    /** Applies augmentation position to camera */
    private ApplyTransition() {
        // Check level outrange for X component...
        this.LastPositon.X = Algorithms.Clamp(this.LastPositon.X + this.Augmentation.X, 0, (<GameClient>window['game']).World.Size.Width);
        // ... and for Y component
        this.LastPositon.Y = Algorithms.Clamp(this.LastPositon.Y + this.Augmentation.Y, 0, (<GameClient>window['game']).World.Size.Height);

        // Remove current Augmentation
        this.Augmentation.X = 0;
        this.Augmentation.Y = 0;
    }

    /** Map current mouse position in window to world coodinates in OCS. Each window corner mean acc world corner */
    private SubscribeOnMouseInput() {
        var self: FreeCameraBahaviour = this;
        var game = (<GameClient>window['game']);

        $(document).on('mousemove.camera', function (e: MouseEvent) {
            var $w = $(window);
            var xRate = e.clientX / $w.width();
            var yRate = ($w.height() - e.clientY) / $w.height();

            self.LastPositon.X = game.World.Size.Width * xRate;
            self.LastPositon.Y = game.World.Size.Height * yRate;
        });
    }

    private UnsubscribeFromMouseInput() {
        $(document).off('mousemove.camera');
    }

    private SubscribeOnKeyboardInput() {
        $(document).on('keypress.camera', function (e: KeyboardEvent) {
            switch (e.keyCode) {
                // UP
                case 38:
                // W
                case 87: {
                    this.Augmentation.Y = 10;
                    break;
                }
                // DOWN
                case 40:
                // S
                case 83: {
                    this.Augmentation.Y = -10;
                }
                // LEFT
                case 65:
                // A
                case 37: {
                    this.Augmentation.X = -10;
                }
                // RIGHT
                case 39:
                // D
                case 83: {
                    this.Augmentation.X = 10;
                }
            }

            this.ApplyTransition();
        });
    }

    private UnsubscribeFromKeyboardInput() {
        $(document).off('keypress.camera');
    }

    //private static SubscribeOnTouchInput() { }

    //private static UnsubscribeFromTouchInput() { }
}

export = FreeCameraBahaviour;