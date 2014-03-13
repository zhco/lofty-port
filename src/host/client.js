/**
 * for load assets from mobile
 * */

if ( window.Wing && Wing.navigator ){
    
    var wingNavigator = Wing.navigator;
    
    fmd( 'lofty/mobile', ['event'], function( event ){
        
        var rUrl = /^https?:\/\/(?:[\w\.:]+)\/m\/([\w\/]+\.\w+)+(?:\?.*)?/i;
        
        var turn = function( url ){
            
            var result = url.match( rUrl );
            
            return result && result[1];
        };
        
        event.on( 'id2url', function( asset ){
            //http://style.c.aliimg.com/m/lofty/lang/observer.js?fmd.stamp=xxx
            var localUrl = turn( asset.url );
            
            if ( localUrl ){
                
                localUrl = wingNavigator.getRealURL( localUrl );
                
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
