/* hook for af */
if ( window.af ){
    
    define( 'gallery/appframework/appframework', function(){
        return af;
    } );
    
    lofty.config({
        alias: {
            'jquery': 'gallery/appframework/appframework'
        }
    });
}
