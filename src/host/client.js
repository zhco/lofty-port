/**
 * for load assets from mobile
 * */

if ( window.Wing && Wing.navigator ){
    
    var isRealWing = !!Wing.navigator.getRealURL,
        wingNavigator = Wing.navigator;
    
    fmd( 'lofty/mobile', ['event'], function( event ){
        
        var rLocal = isRealWing ? /^https?\:\/\/(?:[\w|\.|\:]+)\/m\/(.*\.\w*)(?:[\?|\#].*)/i : /^https?\:\/\/(?:[\w|\.|\:]+)\/m(\/.*)/i;
        
        var turn = function( url ){
            
            var result = url.match( rLocal );
            
            return result && result[1];
        };
        
        event.on( 'id2url', function( asset ){
            //http://style.c.aliimg.com/m/lofty/lang/observer.js?fmd.stamp=xxx
            var localUrl = turn( asset.url );
            
            if ( localUrl ){
                
                if ( isRealWing ){
                    localUrl = wingNavigator.getRealURL( localUrl );
                }
                
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
    
}
