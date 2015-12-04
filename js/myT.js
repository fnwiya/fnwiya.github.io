$(function(){
var elem = '#id';
var content = 'It\'s a <del>rainy</del>sunny day in <mark class="pink">Miami, FL</mark>.';

$(elem).t(content,{

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

//Callbacks
init:function(elem){},
typing:function(elem,chars_total,chars_left,char){},
fin:function(elem){}

});});

//Methods
$(elem).t('add',content);         // adds content
$(elem).t('pause',true);          // pauses typing (toggles if 2nd param omitted)

//Data/properties
$(elem).data('t');                // TRUE if initialised
$(elem).data('is_typing');        // (bool)
$(elem).data('pause');            // (bool)
