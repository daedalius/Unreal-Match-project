import Point = require('../../Entities/Primitives/Point.Primitive');
import Camera = require('../Camera/Camera');

class BackgroundRender {
    public static Run() {

    }

    private static PreviousCameraPosition: Point;
    private static DrawBackground() {
        var currentCameraPosition: Point = Camera.GetCameraPosition();

        // Prevent background redraw if cameras position doesn't changed
        if (BackgroundRender.PreviousCameraPosition !== undefined) {
            if (BackgroundRender.PreviousCameraPosition.Equals(currentCameraPosition))
            {
                return;
            }
        }

        BackgroundRender.PreviousCameraPosition = currentCameraPosition;

        // Draw background

    }
}