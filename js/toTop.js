$(function() {
    var showFlag = false;
    var topBtn = $('#toTop');
    topBtn.css('bottom', '-300px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '-15px'}, 400);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-300px'}, 400);
            }
        }
    });
});
