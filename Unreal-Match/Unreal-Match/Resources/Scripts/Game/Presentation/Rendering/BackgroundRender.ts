import VideoMode = require('Resources/Scripts/Game/Enums/VideoMode.Enum');
import Size = require('Resources/Scripts/Game/Entities/Primitives/Size.Primitive');
import ResizeMode = require('Resources/Scripts/Game/Enums/ResizeMode.Enum');
import GameClient = require('Resources/Scripts/Game/Entities/Game/GameClient');

class BackgroundRender {
    public static Resize() {
        var game = (<GameClient>window['game']);
        var $window = jQuery(window);
        var $content = jQuery('#content');

        // Current orientation info
        var windowWidth = $window.width();
        var windowHeight = $window.height();

        var newWidth = windowWidth;
        var newHeight = windowHeight;

        var originAspectRatio = game.Configuration.Origin.Width / game.Configuration.Origin.Height;

        // is full resizing doen't required
        var isOnlyMargins = (game.Configuration.ResizeMode !== ResizeMode.Fit) &&
                            (game.Configuration.Origin.Width <= windowWidth) &&
                            (game.Configuration.Origin.Height <= windowHeight);

        if (isOnlyMargins) {
            // Only correct margins
            var verticalMargins = (windowHeight - game.Configuration.Origin.Height) / 2;
            var horizontalMargins = (windowWidth - game.Configuration.Origin.Width) / 2
            $content.css('margin', verticalMargins + 'px ' + horizontalMargins + 'px');   // Margins for align
        }
        else {
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

        }

        if (!game.Configuration.Relative) {
            game.Configuration.Relative = new Size(newWidth, newHeight)
        }
        else {
            game.Configuration.Relative.Width = newWidth;
            game.Configuration.Relative.Height = newHeight;
        }

        // TODO: Recalculate all relative sizes according new width

        // TODO: Synchronize current player view vector

    }
}

export = BackgroundRender;