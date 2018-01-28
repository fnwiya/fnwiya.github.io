$(function(){
    $('.works-panels').slick({
        infinite: true
        ,dots: true
        ,autoplay: true
        ,autoplaySpeed: 4000
        ,slidesToShow: 3
        ,slidesToScroll: 1
        ,responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
