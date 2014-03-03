/**
 * lofty config
 * */
 
var rStyle = /\.css(?:\?|$)/;

lofty.config({
    plugin: false,
    combo: false,
    resolve: function( id ){
        
        var parts = id.split('/'),
            root = parts[0],
            type = rStyle.test( id ) ? 'css/' : 'js/';
        
        switch ( root ){
            case 'lofty':
            case 'lofty-mobile':
            case 'gallery':
                id = 'fdevlib/' + type + id;
                break;
            case 'sys':
                id = 'sys/' + type + parts.slice( 1 ).join('/');
                break;
            case 'fmd':
                id = 'fdevlib/' + type + 'lofty/port/fmdjs/' + id;
                break; 
        }
        
        return id;
    },
    debug: (function(){
        return window.location.href.indexOf('lofty.debug=true') > 0;
    }())
});
