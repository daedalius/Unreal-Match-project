import Algorithms = require('../../Algorithms');
import CameraBahaviour = require('CameraBahaviour');
import GameObject = require('../../Entities/Objects/GameObject');
import UnrealMatch = require('../../UnrealMatch');

import Point = require('../../Entities/Primitives/Point.Primitive');
import Vector = require('../../Entities/Primitives/Vector.Primitive');

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
        this.LastPositon.X = Algorithms.Clamp(this.LastPositon.X + this.Augmentation.X, UnrealMatch.LEVEL.Start.X, UnrealMatch.LEVEL.End.X);
        // ... and for Y component
        this.LastPositon.Y = Algorithms.Clamp(this.LastPositon.Y + this.Augmentation.Y, UnrealMatch.LEVEL.Start.Y, UnrealMatch.LEVEL.End.Y);

        // Remove current Augmentation
        this.Augmentation.X = 0;
        this.Augmentation.Y = 0;
    }

    /** Map current mouse position in window to world coodinates in OCS. Each window corner mean acc world corner */
    private SubscribeOnMouseInput() {
        $(document).on('mousemove.camera', function (e: MouseEvent) {
            var $w = $(window);
            var xRate = e.clientX / $w.width();
            var yRate = ($w.height() - e.clientY) / $w.height();

            this.NewPosition.X = UnrealMatch.LEVEL.Width * xRate;
            this.NewPosition.Y = UnrealMatch.LEVEL.Height * yRate;
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