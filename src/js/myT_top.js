import $ from 'jquery'
const T_top = function() {
  $('#map').t({
    speed:10,
    speed_vary:true,
    delay:0,
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
};

export default T_top;
