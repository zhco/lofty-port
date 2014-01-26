/**
 * for amd config
 * */

fmd('lofty/amd',['config'],function( config ){
    
    /* for config amd */
    config.register({
        keys: 'amd',
        rule: function( current, key, val ){
            config.set({
                async: val
            });
        }
    });
    
});
