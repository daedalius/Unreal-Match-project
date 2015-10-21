import ResourceCache = require('resource-cache');
import PreloaderScreen = require('../Other/preloader-screen');
import ResourceType = require('resource-type');

ResourceCache.Add(ResourceType.AudioResource, 'menu-theme', '/Resources/Sounds/Game/Levels/Rising-Sun', 2000);
ResourceCache.Add(ResourceType.ImageResource, 'map', '/Resources/Images/Game/Levels/Rising-Sun.jpg', 2500);
ResourceCache.Add(ResourceType.ImageResource, 'map-pass', '/Resources/Images/Game/Levels/Rising-Sun-Passableness-Map.png', 14);