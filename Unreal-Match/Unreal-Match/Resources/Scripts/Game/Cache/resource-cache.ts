/// <reference path='../../vendors/jquery.d.ts' />

import IGameResource = require('game-resource-interface');
import AudioResource = require('audio-resource');
import ImageResource = require('image-resource');
import ResourceType = require('resource-type');
import PreloaderScreen = require('../HUD/preloader-screen');

class ResourceCache {
    private static IsStarted = false;
    private static TotalWeight = 0;
    private static LoadedWeight = 0;

    /** Cache onload state in percent */
    public static LoadedPercent = 0;
    /** Contains all cached Howl objects */
    public static Audio = {};
    /** Contains all cached img nodes */
    public static Image = {};

    private static Items = {
        Audio: {},
        Image: {}
    }

    /** Cache resource. First time with preloader screen. */
    public static Add(type: ResourceType, name: string, path: string, weight: number) {
        var res;
        switch (type) {
            case ResourceType.AudioResource: {
                res = new AudioResource(name, path, weight);
                ResourceCache.Items.Audio[name] = res;
                ResourceCache.TotalWeight += weight;
                break;
            }
            case ResourceType.ImageResource: {
                res = new ImageResource(name, path, weight);
                ResourceCache.Items.Image[name] = res;
                ResourceCache.TotalWeight += weight;
                break;
            }
        }

        // Will show preloader screen on current game view 
        if (!ResourceCache.IsStarted) {
            // [INFO] - shared cache reff
            window['ResourceCache'] = ResourceCache;

            PreloaderScreen.Show();

            // React on resource-loaded event and add to
            $('#game-cache-element').on('resource-loaded', function (event) {
                var loadedResourceName = <string>arguments[1]['name'];
                var loadedResourceType = <string>arguments[1]['type'];
                var loadedResource;
                switch (loadedResourceType) {
                    case 'Audio': {
                        loadedResource = ResourceCache.Items.Audio[loadedResourceName];
                        ResourceCache.Audio[loadedResource["Name"]] = loadedResource["Item"];
                        ResourceCache.LoadedWeight += loadedResource['Weight'];
                        break;
                    }
                    case 'Image': {
                        loadedResource = ResourceCache.Items.Image[loadedResourceName];
                        ResourceCache.Image[loadedResource["Name"]] = loadedResource["Item"];
                        ResourceCache.LoadedWeight += loadedResource['Weight'];
                        break;
                    }
                }
                ResourceCache.LoadedPercent = ResourceCache.LoadedWeight / ResourceCache.TotalWeight * 100;

                PreloaderScreen.Set(ResourceCache.LoadedPercent);

                if (ResourceCache.LoadedPercent >= 100) {
                    PreloaderScreen.Hide();
                    $('#game-cache-element').trigger('resources-loaded');
                }
            })
        }
        ResourceCache.IsStarted = true;
    }

    public static ResetState() {
        ResourceCache.IsStarted = false;
    }
}

export = ResourceCache