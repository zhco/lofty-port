/**
 * for load assets from mobile
 * */

window.Wing && Wing.navigator && Wing.navigator.getRealURL && fmd( 'lofty/mobile', ['event'], function( event ){
    
    var rLocal = /^https?\:\/\/(?:[\w|\.|\:]+)\/m\/(.*\.\w*)(?:[\?|\#].*)/i;
    
    var turn = function( url ){
        
        var result = url.match( rLocal );
        
        return result && result[1];
    };
    
    event.on( 'id2url', function( asset ){
        //http://style.c.aliimg.com/m/lofty/lang/observer.js?fmd.stamp=xxx
        var localUrl = turn( asset.url );
        
        if ( localUrl ){
            localUrl = Wing.navigator.getRealURL( localUrl );
            
            if ( localUrl ){
                asset.url = localUrl;
                asset.comboed = true;
            } else {
                event.emit( 'mobileAssetNotFound', asset );
            }
        } else {
            event.emit( 'mobileAssetNotMatch', asset );
        }
    } );
} );
