/* hook for jQuery */
if ( window.jQuery ){
    
    define( 'gallery/jquery/jquery-latest', function(){
        return jQuery;
    } );
    
    lofty.config({
        alias: {
            'jquery': 'gallery/jquery/jquery-latest'
        }
    });
}
