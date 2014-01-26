/**
 * lofty debug ( mobile only )
 * */
 
lofty.on( 'mobileAssetNotMatch', function( asset ){
    
    lofty.log( asset.id + "'s " + asset.url + ' is not match for mobile!', 'warn' );
} );

lofty.on( 'mobileAssetNotFound', function( asset ){
    
    lofty.log( asset.id + ': not found in mobile!', 'warn' );
} );
