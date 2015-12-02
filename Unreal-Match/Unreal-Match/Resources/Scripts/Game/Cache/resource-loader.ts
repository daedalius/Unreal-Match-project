import ResourceCache = require('resource-cache');
import PreloaderScreen = require('../HUD/preloader-screen');
import ResourceType = require('resource-type');

class ResourceLoader {
    static LoadHQBundle = function () {
        ResourceCache.Add(ResourceType.AudioResource, 'menu-theme', '/Resources/Sounds/Game/Levels/Rising-Sun', 2000);

        ResourceCache.Add(ResourceType.ImageResource, 'map', '/Resources/Images/Game/Levels/Rising-Sun.jpg', 2500);
        ResourceCache.Add(ResourceType.ImageResource, 'map-pass', '/Resources/Images/Game/Levels/Rising-Sun-Passableness-Map.png', 14);

        ResourceCache.Add(ResourceType.ImageResource, 'weapons', '/Resources/Images/Game/Weapons/hq.png', 39);

        ResourceCache.Add(ResourceType.ImageResource, 'guard-body', '/Resources/Images/Game/Fractions/Guard/hq/guard-body.png', 17);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-hands', '/Resources/Images/Game/Fractions/Guard/hq/guard-hands.png', 7);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-legs', '/Resources/Images/Game/Fractions/Guard/hq/guard-legs.png', 205);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-lauren', '/Resources/Images/Game/Fractions/Guard/hq/guard-head-lauren.png', 2);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-blackjack', '/Resources/Images/Game/Fractions/Guard/hq/guard-head-blackjack.png', 2);
    }

    static LoadLQBundle = function () {
        ResourceCache.Add(ResourceType.AudioResource, 'menu-theme', '/Resources/Sounds/Game/Levels/Rising-Sun', 2000);
        // TODO: convert map
        ResourceCache.Add(ResourceType.ImageResource, 'map', '/Resources/Images/Game/Levels/Rising-Sun.jpg', 2500);
        ResourceCache.Add(ResourceType.ImageResource, 'map-pass', '/Resources/Images/Game/Levels/Rising-Sun-Passableness-Map.png', 14);

        ResourceCache.Add(ResourceType.ImageResource, 'weapons', '/Resources/Images/Game/Weapons/lq.png', 4);

        ResourceCache.Add(ResourceType.ImageResource, 'guard-body', '/Resources/Images/Game/Fractions/Guard/lq/guard-body.png', 2);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-hands', '/Resources/Images/Game/Fractions/Guard/lq/guard-hands.png', 1);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-legs', '/Resources/Images/Game/Fractions/Guard/lq/guard-legs.png', 16);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-lauren', '/Resources/Images/Game/Fractions/Guard/lq/guard-head-lauren.png', 1);
        ResourceCache.Add(ResourceType.ImageResource, 'guard-blackjack', '/Resources/Images/Game/Fractions/Guard/lq/guard-head-blackjack.png', 1);
    }
}

export = ResourceLoader;