import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');

import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
class BackgroundRender {
    public static Run() {

    }

    private static PreviousCameraPosition: Point;
    private static DrawBackground() {
        var currentCameraPosition: Point = (<GameClient>window['game']).Camera.GetCameraPosition();

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