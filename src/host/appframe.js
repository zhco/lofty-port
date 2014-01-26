/**
 * lofty appframe
 * */
 
var appframe = function( name ){
    
    //window[name] && fmd.log( 'This is appframe name already exists!!!', 'warn' );
    
    window[name] = {
        define: fmd.define,
        log: function(){
            fmd.log.apply( null, arguments );
        },
        config: fmd.config,
        on: fmd.on,
        off: fmd.off
    };
};


appframe('lofty');

var lofty = window.lofty;

lofty.appframe = appframe;
lofty.cache = fmd.cache;
