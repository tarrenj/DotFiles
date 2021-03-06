// Copyright (c) 2012 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Memecrunch',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'a[href*="memecrunch.com/meme/"]:not([href$="image.png"])',
            /(.*)\/?$/,
            '$1/image.png'
        );
        callback($(res));
    }
});