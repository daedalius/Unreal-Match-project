import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');

class Render {
    public static ResizeCanvaces() {
        var game = (<GameClient>window['game']);
        var $window = jQuery(window);
        var $content = jQuery('#content');

        // Current orientation info
        var windowWidth = $window.width();
        var windowHeight = $window.height();

        var newWidth = windowWidth;
        var newHeight = windowHeight;

        var originAspectRatio = game.Configuration.Origin.Width / game.Configuration.Origin.Height;

        // Full resize
        if (newWidth > windowHeight * originAspectRatio) {
            // This is album (horizontal) orientation
            // Compute width according height
            newWidth = Math.round(newHeight * originAspectRatio);
            // Apply width and margins
            $content.width(newWidth)
                .height(newHeight)
                .css('margin', '0px ' + (windowWidth - newWidth) / 2 + 'px');   // Horizontal margins for align
        }
        else {
            // This is portrait (vertical) orientation
            newHeight = Math.round(newWidth / originAspectRatio);

            // Change height regarding current width
            $content.width(newWidth)
                .height(newHeight)
                .css('margin', (windowHeight - newHeight) / 2 + 'px 0px');      // Vertical margins for align
        }

        // Apply computed sizes to canvaces
        if (game.Configuration.VideoMode === VideoMode.HQ) {
            // Change real width
            $content.find('canvas').attr('width', newWidth)
                .attr('height', newHeight);
        }
        else {
            // Change CSS width
            $content.find('canvas').css('width', newWidth)
                .css('height', newHeight);
        }

        // TODO: Recalculate all relative sizes according new width

        // TODO: Synchronize current player view vector

        return new Size(newWidth, newHeight);
    }

    private static PreviousCameraPosition: Point;
    private static DrawBackground() {
        //var currentCameraPosition: Point = (<GameClient>window['game']).Camera.GetCameraPosition();

        //// Prevent background redraw if cameras position doesn't changed
        //if (BackgroundRender.PreviousCameraPosition !== undefined) {
        //    if (BackgroundRender.PreviousCameraPosition.Equals(currentCameraPosition))
        //    {
        //        return;
        //    }
        //}

        //BackgroundRender.PreviousCameraPosition = currentCameraPosition;

        // Draw background

    }
}

export = Render;