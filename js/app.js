$(document).ready(function() {
    let colors = ['#ED7300', '#87C70F', '#00C9BF', '#FFA3B5', '#FFBF0F'];

    // init Masonry
    var $grid = $('.grid').masonry({});
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });


    $(window).scroll(function() { //************************************************************event scoll menu

        if ($(document).scrollTop() == 0) {
            $('header').toggleClass('transparent');

        } else if ($(document).scrollTop() > 0 && $(document).scrollTop() < $('#Home').height()) {
            $('header').addClass('transparent');
            $('header li:first-child a').addClass('active');
            $('header li:nth-child(2) a').removeClass('active');
            $('#retour').css("display", "none");
            $('header.transparent').css("background-color", "rgba(0, 0, 0, 0.2)");
        } else if ($(document).scrollTop() >= $('#Home').height() && $(document).scrollTop() < $('#Home').height() * 2) {
            $('header li:first-child a').removeClass('active');
            $('header li:nth-child(3) a').removeClass('active');
            $('header li:nth-child(2) a').addClass('active');
            $('#retour').css("display", "block");

            $('.innerJauge.Html').animate({
                width: '90%'
            }, "slow");
            $('.innerJauge.Css').animate({
                width: '90%'
            }, "slow");
            $('.innerJauge.Jquery').animate({
                width: '70%'
            }, "slow");
            $('.innerJauge.Javascript').animate({
                width: '80%'
            }, "slow");
            $('.innerJauge.Angular').animate({
                width: '30%'
            }, "slow");
            $('.innerJauge.Php').animate({
                width: '20%'
            }, "slow");
            $('.innerJauge.Wordpress').animate({
                width: '20%'
            }, "slow");
            $('.innerJauge.Nodejs').animate({
                width: '20%'
            }, "slow");
            $('.innerJauge.Mysql').animate({
                width: '20%'
            }, "slow");

        } else if ($(document).scrollTop() >= $('#Home').height() * 2 && $(document).scrollTop() < $('#Home').height() * 3) {
            $('header li:nth-child(2) a').removeClass('active');
            $('header li:nth-child(4) a').removeClass('active');
            $('header li:nth-child(3) a').addClass('active');

        } else if ($(document).scrollTop() >= $('#Home').height() * 3) {
            $('header li:nth-child(3) a').removeClass('active');
            $('header li:nth-child(4) a').addClass('active');
        }

    });


    $('a[href^="#"]').click(function() { //**************************************************event click menu
        let the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
        return false;
    });



    $("a").mouseup(function() { //**********************************************************erase link focus
        $(this).blur();
    });


    //*************************************************************************************Random color on VD hover
    $('h3').mouseenter(function() {
        $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
    });
    $('h3').mouseleave(function() {
        $(this).css('color', '#d2d9d9');
    });



    //**************************************************************************************Random colors on burger hover
    $('.burger').mouseenter(function() {
        $('.burger span:first-child').css('background-color', colors[Math.floor(Math.random() * colors.length)]);
        $('.burger span:nth-child(2)').css('background-color', colors[Math.floor(Math.random() * colors.length)]);
        $('.burger span:nth-child(3)').css('background-color', colors[Math.floor(Math.random() * colors.length)]);
    });
    $('.burger').mouseleave(function() {
        $('.burger span').css('background-color', '#d2d9d9');
    });

    if ($(window).width() <= 800) {

        $('.burger').click(function() {
            $('header .nav').toggleClass("visible");
            $(this).toggleClass('cross');
            $('body').toggleClass("overflow");
        });

        $('header .nav a').click(function() {
            $('header .nav').toggleClass("visible");
            $('header .burger').removeClass('cross');
            $('body').toggleClass("overflow");
        });
    }


    //*************************************************************************************Skills display

    $('.html5').mouseenter(function() {
        $('.text h4').hide().html('HTML5 Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good overall knowledge of Html5 elements.'],
            typeSpeed: 0
        });
    });

    $('.css3').mouseenter(function() {
        $('.text h4').hide().html('Css3 Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good overall knowledge of Css3 selectors and pseudo-selectors.'],
            typeSpeed: 0
        });
    });

    $('.jquery').mouseenter(function() {
        $('.text h4').hide().html('Jquery Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good understanding of Jquery equivalents to Javascript Vanilla.'],
            typeSpeed: 0
        });
    });

    $('.javascript').mouseenter(function() {
        $('.text h4').hide().html('Javascript ES6 Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Learned before Jquery, directly from ES6, good understanding of Fundamentals and more, <br> Codewars rank : 5kyu.'],
            typeSpeed: 0
        });
    });

    $('.angular').mouseenter(function() {
        $('.text h4').hide().html('AngularJS Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Beginner but understands the logic behind, learning AngularJS 1.6.'],
            typeSpeed: 0
        });
    });

    $('.back').mouseenter(function() {
        $('.text h4').hide().html('Back-End Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Beginner, currently learning.'],
            typeSpeed: 0
        });
    });

    //***********************************************************************************About_me
    $('.general').mouseenter(function() {
        $('#About_me .right h5').hide().html('About me').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('I am a 28 years-old web developper, currently learning at SIMPLonMARS in L\'ecole Centrale de Marseille.<br> As you can see I am not particularly good in web design but I\'m doing my best to get better. <br><br> I started learning web developpement on my own but wanted a more academic environnement to progress faster, <br><br> this is when I applied for SIMPLonMARS <br><br> I\'ve been selected amongst 100+ candidates. I\'m currently learning there. <br><br> I am a Junior , yet extremely motivated , web developper!').fadeIn();
    });

    $('.past').mouseenter(function() {
        $('#About_me .right h5').hide().html('Past Experiences').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('Nothing related to web developpement but I have a bachelor\'s degree in English and Japanese languages.<br><br> Between January 2013 and August 2016 I worked in an organic shop, as asssistant manager for the last year. <br><br> I\'ve also been volunteering in Scotland for two months in the past two years for a total of 4 months, this experience improved my understanding of english language.').fadeIn();
    });

    $('.languages').mouseenter(function() {
        $('#About_me .right h5').hide().html('Spoken Languages').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('French is my mother tongue but I am comfortable with english, <br><br> I still am a begginner in japanese.').fadeIn();
    });

});
