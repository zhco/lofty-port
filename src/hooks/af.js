/* hook for af */
if ( window.af ){
    
    define( 'lofty/gallery/appframework/af', function(){
        return af;
    } );
    
    lofty.config({
        alias: {
            'jquery': 'lofty/gallery/appframework/af'
        }
    });
}
