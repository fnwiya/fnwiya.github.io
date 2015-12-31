$(function(){
    $('#map').t({
        speed:6,
        speed_vary:true,
		delay:0.5,
        mistype:25,
		locale:'en',
		caret:true,
		blink:false,
        repeat:true,
        typing:function(){
        },

        fin:function(){
        }
    });
});
