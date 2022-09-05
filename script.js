$(function(){
    $('.slick_slider').slick({
        arrows: false,
        dots: true,
        accessibility: true,
        draggable:false,
        touchThreshold: 10,
        touchMove: true,
        adaptiveHeight: true,
    })
})

$(function () {
    $('.main_four_slider').slick({
        arrows: true,
        dots: true,
        accessibility: true,
        draggable:false,
        touchThreshold: 10,
        touchMove: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }]
    })
})

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

        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true

                }
            }]
    })
})


$(document).ready(function (){
    $('.header_burger').click(function (event) {
        $('.header_burger,.ul_nav_left').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// let video1 = $('.video_btn1')
// let video2 = $('.video_btn2')
// let video3 = $('.video_btn3')

// let active = document.querySelector('.slick_');
// console.log(active)



// $(document).ready(function (event) {
//
//
//
//
//         document.addEventListener("click",
//         function (e) {
//             let active = $('.slick_slider .slick-active');
//             let col = $('.slick_slider .slick-slide').not('.slick-cloned');
//             let activeBtn  = document.querySelector('.nav_btn');
//             let mass = [];
//             for(let i = 0; i < col.length; i++){
//                 let temp = col[i];
//                 mass.push(temp);
//                 if ($(temp).hasClass('slick-active') && ($('.nav_btn').not('active'))){
//
//                  //   if (active){
//                  //        function nav_btn (){
//                           //  if(e.target.closest('.video_btn')) {
//                                 activeBtn.classList.toggle('active');
//                                 console.log('yes');
//                       //      }
//                  //        }
//                    // }
//                 } else {
//                     console.log('no');
//                 }
//             }
//
//         })
// })

let video1 = $('.video_btn1')
let video2 = $('.video_btn2')
let video3 = $('.video_btn3')
// let myVideo1 = $('#')


function callB (name, id){
    name.click(function (event) {
        if (name.hasClass('play')){
            name.removeClass('play').addClass('pause');
            document.getElementById('id').play();
        }else{
            name.removeClass('pause').addClass('play');
            document.getElementById('id').pause();
        }
    });
}

callB (video1, myVideo1);
callB (video2, myVideo2);
callB (video3, myVideo3);

// $(document).ready(function (){
//     video1.click(function (event) {
//         if (video1.hasClass('play')){
//             video1.removeClass('play').addClass('pause');
//             document.getElementById('myVideo1').play();
//         }else{
//             video1.removeClass('pause').addClass('play');
//             document.getElementById('myVideo1').pause();
//         }
//     });
// });
// $(document).ready(function (){
//     video2.click(function (event) {
//         if (video2.hasClass('play')){
//             video2.removeClass('play').addClass('pause');
//             document.getElementById('myVideo2').play();
//         }else{
//             video2.removeClass('pause').addClass('play');
//             document.getElementById('myVideo2').pause();
//         }
//     });
// });
// $(document).ready(function (){
//     video3.click(function (event) {
//         if (video3.hasClass('play')){
//             video3.removeClass('play').addClass('pause');
//             document.getElementById('myVideo3').play();
//         }else{
//             video3.removeClass('pause').addClass('play');
//             document.getElementById('myVideo3').pause();
//         }
//     });
// });




$(document).ready(function (){
    $('.spoler_title').click(function (event) {
        if ($('.spoler').hasClass('only_one')){
            $('.spoler_title').not($(this)).removeClass('active');
            $('.spoler_text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);

    })
    $(document).on('click', function(event) {
        if (!$(event.target).closest(".spoler_title").length) {
            $('.spoler_title').removeClass('active');
            $('.spoler_text').slideUp(300);

        }
        event.stopPropagation();
    });
});
