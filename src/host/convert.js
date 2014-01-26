/*
 * url convert
 * */

var rId = /([a-z])([A-Z])/g;

lofty.on( 'resolve', function( asset ){
    
    asset.url = asset.url.replace( rId, function( s, s1, s2 ){
        return s1 + '-' + s2;
    } ).toLowerCase();
} );
