import game = require('../GameLoader');
import ResourceCache = require('resource-cache');
import ResourceType = require('resource-type');
import Level = require('../Enums/Level.Enum');
import GameConfiguration = require('Entities/Game/GameConfiguration');
import VideoMode = require('../Enums/VideoMode.Enum');

class ResourceLoader {
    /** Caches all characters, weapons, items for selected VideoMode */
    public static LoadBaseBundle = function () {
        if (game.Configuration.VideoMode === VideoMode.HQ) {
            ResourceLoader.LoadHQBaseBundle();
        }
        else {
            ResourceLoader.LoadLQBaseBundle();
        }
    }

    /** Caches all media for required game level */
    public static LoadLevelBundle = function (level: Level) {
        if (game.Configuration.VideoMode === VideoMode.HQ) {
            ResourceLoader.LoadHQLevelBundle(level);
        }
        else {
            ResourceLoader.LoadLQLevelBundle(level);
        }
    }

    /** Caches all characters, weapons, items in HQ */
    private static LoadHQBaseBundle = function () {
        ResourceCache.Add(ResourceType.ImageResource, 'weapons', '/Resources/Images/Game/Weapons/hq.png', 39);

        ResourceCache.Add(ResourceType.ImageResource, 'guard-body', '/Resources/Images/Game/Fractions/Guard/hq/guard-body.png', 17);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-hands', '/Resources/Images/Game/Fractions/Guard/hq/guard-hands.png', 7);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-legs', '/Resources/Images/Game/Fractions/Guard/hq/guard-legs.png', 205);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-lauren', '/Resources/Images/Game/Fractions/Guard/hq/guard-head-lauren.png', 2);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-blackjack', '/Resources/Images/Game/Fractions/Guard/hq/guard-head-blackjack.png', 2);
    }

    /** Caches all characters, weapons, items in LQ */
    private static LoadLQBaseBundle = function () {
        ResourceCache.Add(ResourceType.ImageResource, 'weapons', '/Resources/Images/Game/Weapons/lq.png', 4);

        ResourceCache.Add(ResourceType.ImageResource, 'guard-body', '/Resources/Images/Game/Fractions/Guard/lq/guard-body.png', 2);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-hands', '/Resources/Images/Game/Fractions/Guard/lq/guard-hands.png', 1);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-legs', '/Resources/Images/Game/Fractions/Guard/lq/guard-legs.png', 16);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-lauren', '/Resources/Images/Game/Fractions/Guard/lq/guard-head-lauren.png', 1);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-blackjack', '/Resources/Images/Game/Fractions/Guard/lq/guard-head-blackjack.png', 1);
    }

    /** Caches all requested level media in HQ */
    private static LoadHQLevelBundle = function (level: Level) {
        switch (level) {
            case Level.RisingSun: {
                ResourceCache.Add(ResourceType.AudioResource, 'menu-theme', '/Resources/Sounds/Game/Levels/Rising-Sun', 2000);
                ResourceCache.Add(ResourceType.ImageResource, 'map', '/Resources/Images/Game/Levels/Rising-Sun/HQ.jpg', 5150);
                break;
            }
        }
    }

    /** Caches all requested level media in LQ */
    private static LoadLQLevelBundle = function (level: Level) {
        switch (level) {
            case Level.RisingSun: {
                ResourceCache.Add(ResourceType.AudioResource, 'menu-theme', '/Resources/Sounds/Game/Levels/Rising-Sun', 2000);
                ResourceCache.Add(ResourceType.ImageResource, 'map', '/Resources/Images/Game/Levels/Rising-Sun/LQ.jpg', 2650);
                break;
            }
        }
    }
}

export = ResourceLoader;