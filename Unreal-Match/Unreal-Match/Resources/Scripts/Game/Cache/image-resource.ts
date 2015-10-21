/// <reference path='../../vendors/jquery.d.ts' />

import IGameResource = require('game-resource-interface');
import ResourceCache = require('resource-cache');

/** Construct image in cache area and fire onload event on cache #game-cache-element node */
class ImageResource implements IGameResource {
    public Name: string;
    public Weight: number;
    public Item: Object;

    /**
    @param name name of item which will be available by ResourceCache.Images.[name] refference
    @param file full path to image including file extension
    @param weight size of image in kilobytes for resourse preloader proggresbar
    */
    constructor(name: string, file: string, weight: number) {
        var jCache = $('#game-cache-element');

        var img = $('<img>');
        img.attr('src', file);
        $(img).on('load', function () {
            jCache.trigger('resource-loaded', [{
                'name': name,
                'type': 'Image'
            }]);
        });
        jCache.append(img);


        this.Name = name;
        this.Weight = weight;
        this.Item = img;
    }
}

export = ImageResource