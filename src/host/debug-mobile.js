/**
 * lofty debug ( mobile only )
 * */
 
lofty.on( 'mobileAssetNotMatch', function( asset ){
    
    lofty.log( asset.id + "'s " + asset.url + ' is not match for mobile!', 'error' );
} );

lofty.on( 'mobileAssetNotFound', function( asset ){
    
    lofty.log( asset.id + ': not found in mobile!', 'error' );
} );
