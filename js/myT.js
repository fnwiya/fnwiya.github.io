$(function(){
var content = 'It\'s a <del>rainy</del>sunny day in <mark class="pink">Miami, FL</mark>.';
$('#id').t(content,{

//Basic settings
speed:75,          // typing speed (ms)
speed_vary:false,  // 'human-like' (bool)
delay:false,       // delays start for (N.)Ns
mistype:false,     // mistyping: 1:N per char
locale:'en',       // keyboard layout; 'en', 'de'
caret:true,        // caret (HTML); default (TRUE): ▎
blink:false,       // blink; if TRUE, 10ms or N ms
tag:'span',        // wrapper (.t-container/.t-caret)
repeat:false,      // if TRUE, infinite or N times


});});


//Data/properties
$('#id').data('t');                // TRUE if initialised
$('#id').data('is_typing');        // (bool)
$('#id').data('pause');            // (bool)
