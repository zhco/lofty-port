/* hook for jQuery */
if ( window.jQuery ){
    
    define( 'gallery/jquery/jqueryLatest', function(){
        return jQuery;
    } );
    
    lofty.config({
        alias: {
            'jquery': 'gallery/jquery/jqueryLatest'
        }
    });
}
