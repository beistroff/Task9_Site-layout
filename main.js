


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
    return false;
});

$(document).ready(function () {
    $(document).on("mouseover", ".technology-container", function () {
        let icon = $(this).children('.technology-icon');
        $(icon).animate({'margin-top': '0px', 'margin-bottom': '40px', color: '#bd4e4e'}, 300);

        let text = $(this).children('.technology-text');
        $(text).animate({'color': '#656565'}, 300);

    });

    $(document).on("mouseleave", ".technology-container", function () {
        let icon = $(this).children('.technology-icon');
        $(icon).animate({'margin-top': '40px', 'margin-bottom': '0px', 'color': '#656565'}, 300);

        let text = $(this).children('.technology-text');
        $(text).animate({'color': '#fff'}, 300);


    });

    $('.our-project-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        asNavFor: '.project-details-slider',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.project-details-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        asNavFor: '.our-project-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });


});

/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});*/
/*$(document).ready(function () {
    $('.our-project-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        asNavFor: '.project-details-slider',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.project-details-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        asNavFor: '.our-project-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 610,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });


    // $('div.work-container').on("click",function () {
    //     $('html, body').animate({
    //         scrollTop: $("div.projects-container").offset().top
    //     }, 1500)
    // });
    // $('div.projects-container').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $("div.team-container").offset().top
    //     }, 1500)
    // }),
    // $('div.team-container').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $("div.subscribe-container").offset().top
    //     }, 1500)
    // })


    $('body').append('<button class="btn_up">');

    $('.btn_up').click(function () {
        $('body').animate({ 'scrollTop': 0 }, 1000);
        $('html').animate({ 'scrollTop': 0 }, 1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.btn_up').addClass('active');
        }
        else {
            $('.btn_up').removeClass('active');
        }
    });

    $(document).on("mouseover", ".technology-container", function () {
        let icon = $(this).children('.technology-icon');
        $(icon).animate({'margin-top': '0px','margin-bottom': '40px', 'color': '#bd4e4e'}, 300);
        let text = $(this).children('.technology-text');
        $(text).animate({'color': '#656565'}, 300);
    });

    $(document).on("mouseleave", ".technology-container", function () {
        let icon = $(this).children('.technology-icon');
        $(icon).animate({'margin-top': '40px', 'margin-bottom': '0px', 'color': '#656565'}, 300);
        let text = $(this).children('.technology-text');
        $(text).animate({'color': 'white'}, 300);
    });

    //Nav dots activation

    $("#zero").on("click", function () {
        $('html, body').animate({
            scrollTop: $("#zero-bl").offset().top
        }, 1500);
    });
    $("#first").on("click", function () {
        $('html, body').animate({
            scrollTop: $("#first-bl").offset().top
        }, 1500);
    });
    $("#second").on("click", function () {
        $('html, body').animate({
            scrollTop: $("#second-bl").offset().top
        }, 1500);
    });
    $("#three").on("click", function () {
        $('html, body').animate({
            scrollTop: $("#three-bl").offset().top
        }, 1500);
    });
    $("#four").on("click", function () {
        $('html, body').animate({
            scrollTop: $("#four-bl").offset().top
        }, 1500);
    });
    $("#five").on("click", function () {
        $('html, body').animate({
            scrollTop: $("#five-bl").offset().top
        }, 1500);
    });
    $("#six").on("click", function () {
        $('html, body').animate({
            scrollTop: $("#six-bl").offset().top
        }, 1500);
    });

    //************************************


    $('#zero-bl-bound, #zero-bl').waypoint(function (dir) {
        console.log('test');
        $('.dot').css('background', 'grey');
        $('#zero').css('background', '#E05555');
    }, {
        offset: '50%'
    });
    $('#first-bl, #first-bl-bound').waypoint(function (dir) {
        //if(dir == 'down') {
        $('.dot').css('background', 'grey');
        $('#first').css('background', '#E05555');
        //console.log(dir);
        //}
    }, {
        offset: '30%'
    });
    $('#second-bl, #second-bl-bound').waypoint(function () {
        $('.dot').css('background', 'grey');
        $('#second').css('background', '#E05555');

    }, {
        offset: '30%'
    });
    $('#three-bl, #three-bl-bound').waypoint(function () {
        $('.dot').css('background', 'grey');
        $('#three').css('background', '#E05555');

    }, {
        offset: '30%'
    });

    $('#four-bl, #four-bl-bound').waypoint(function () {
        $('.dot').css('background', 'grey');
        $('#four').css('background', '#E05555');

    }, {
        offset: '30%'
    });

    $('#five-bl, #five-bl-bound').waypoint(function () {
        $('.dot').css('background', 'grey');
        $('#five').css('background', '#E05555');

    }, {
        offset: '30%'
    });
    $('#six-bl, #six-bl-bound').waypoint(function () {
        $('.dot').css('background', 'grey');
        $('#six').css('background', '#E05555');

    }, {
        offset: '30%'
    });



    $('#three-bl').waypoint(function () {
        $('.work-container-ellipse').addClass("animation-class");

    }, {
        offset: '100%'
    });

    // $('.sphere-block-container-item:nth-of-type(odd) > .sphere-block-image').waypoint(function (e) {
    //     $(this.element).addClass("animation-class-sp");
    // }, {
    //     offset: '100%'
    // });
    // $('.sphere-block-container-item:nth-of-type(2n) > .sphere-block-image').waypoint(function (e) {
    //     $(this.element).addClass("animation-class-sp-right");
    // }, {
    //     offset: '100%'
    // });

});

*/

/*function upDate(){
    document.querySelector(".technology-text").style.color = "black";

}

function undo(){
    document.querySelector(".technology-text").style.color = "white";
    let text = document.querySelectorAll(".technology-text");
    text.target.style.color = "white";
    let icon = document.querySelectorAll(".technology-icon");
    icon.style.marginTop = "40px";
}*/
