import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');
import Point = require('Resources/Scripts/Game/Entities/Primitives/Point.Primitive');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import Rectangle = require('Resources/Scripts/Game/Entities/Primitives/Rectangle.Primitive');
import Camera = require('Resources/Scripts/Game/Presentation/Camera/Camera');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');
import ResourceCache = require('Resources/Scripts/Game/Cache/resource-cache');

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

            // Update relative config size
            if (!game.Configuration.Relative) {
                game.Configuration.Relative = new Size(newWidth, newHeight);
            }
            else {
                game.Configuration.Relative.Width = newWidth;
                game.Configuration.Relative.Height = newHeight;

                // TODO: Recalculate cached relative sizes
            }

        }
        else {
            // Change CSS width
            $content.find('canvas').css('width', newWidth)
                .css('height', newHeight);

            // Update relative config size
            game.Configuration.Relative = game.Configuration.Origin;
        }

        // TODO: Synchronize current player view vector

        return new Size(newWidth, newHeight);
    }
    public static DrawScene() {
        // Draw level
        Render.DrawBackground();

        // Draw objects (players, items, shells)

        // Draw animations

        // And again
        window.requestAnimationFrame(Render.DrawScene);
    }

    private static DrawBackground() {
        var game = <GameClient>window['game'];
        game.World.GetComponent('WorldDraw').Trigger();
    }
}

export = Render;