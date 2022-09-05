$(function (){
    $('.quotes_slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1.5,
        accessibility: true,
        draggable:false,
        touchThreshold: 10,
        touchMove: true,
        slidesToScroll: 1,
        variableWidth: false,
        adaptiveHeight: true,
        infinite: false,

    })
})