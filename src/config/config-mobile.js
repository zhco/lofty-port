/**
 * lofty config for mobile
 * */

lofty.config({
    plugin: false,
    combo: false,
    resolve: function( id ){
        
        var parts = id.split('/'),
            root = parts[0];
        
        switch ( root ){
			case 'lofty':
				id = 'm/' + id;
                break;
            case 'gallery':
                id = 'm/lofty/' + id;
                break;
        }
        
        return id;
    },
    debug: (function(){
        return window.location.href.indexOf('lofty.debug=true') > 0;
    }())
});
