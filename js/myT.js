$(function(){
    $('#code').t({
        speed:30,
        speed_vary:true,
		delay:0.5,
        mistype:25,
		locale:'en',
		caret:true,
		blink:false,
        typing:function(){
        },

        fin:function(){
        }
    });
});
