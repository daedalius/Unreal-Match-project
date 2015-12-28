/// <reference path='../../vendors/howler.d.ts' />
/// <reference path='../../vendors/jquery.d.ts' />

import IGameResource = require('Resources/Scripts/Game/Cache/game-resource-interface');
import ResourceCache = require('Resources/Scripts/Game/Cache/resource-cache');

/** Construct Howl object and fire onload event on cache #game-cache-element node */
class AudioResource implements IGameResource {
    public Name: string;
    public Weight: number;
    public Item: Object;

    /**
    @param name name of item which will be available by ResourceCache.Audio.[name] refference
    @param file full path to audio without file extension
    @param weight size of audio in kilobytes for resourse preloader proggresbar
    */
    constructor(name: string, file: string, weight: number) {
        this.Name = name;
        this.Weight = weight;
        this.Item = new Howl({
            urls: [file + '.mp3', file + '.ogg'],
            onload: function () {
                $('#game-cache-element').trigger('resource-loaded', [{
                    'name': name,
                    'type': 'Audio'
                }]);
            }
        });
    }
}

export = AudioResource