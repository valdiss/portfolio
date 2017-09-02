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
            $("main").toggleClass("overflow blur");
        });

        $('header .nav a').click(function() {
            $('header .nav').toggleClass("visible");
            $('header .burger').removeClass('cross');
            $('main').toggleClass("overflow blur");
        });
    }


    //*************************************************************************************Skills display


    //*******************************************************************************Front-End
    $('.html5').mouseenter(function() {
        $('.text h4').hide().html('HTML5/Css3 Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good overall knowledge of Html5 elements and Css3 selectors/pseudo-selectors.'],
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
        $('.text h4').hide().html('Angular Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good understanding of Angular, learned from the teaching platform Udemy, from the <em>Angular 4 (formerly Angular 2) - The Complete Guide</em> course from Maximilian Schwartzmüller.'],
            typeSpeed: 0
        });
    });

    $('.reactjs').mouseenter(function() {
        $('.text h4').hide().html('React Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good grasp of components, Props and State.'],
            typeSpeed: 0
        });
    });

    // *****************************************************************************Back-End
    $('.php').mouseenter(function() {
        $('.text h4').hide().html('PHP Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good grasp of PHP fundamentals, Object Oriented Programming.'],
            typeSpeed: 0
        });
    });

    $('.nodejs').mouseenter(function() {
        $('.text h4').hide().html('Nodejs Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Beginner, currently learning.'],
            typeSpeed: 0
        });
    });

    $('.mysql').mouseenter(function() {
        $('.text h4').hide().html('SQL Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good understanding of fundamentals, relational tables.'],
            typeSpeed: 0
        });
    });

    $('.symfony').mouseenter(function() {
        $('.text h4').hide().html('Symfony 3 Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Practiced it through exercices, good grasp of Doctrine, Entities,<br> Actions, CRUD and annotation routing.'],
            typeSpeed: 0
        });
    });

    $('.redis').mouseenter(function() {
        $('.text h4').hide().html('Redis Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Beginner, currently learning.'],
            typeSpeed: 0
        });
    });

    $('.wordpress').mouseenter(function() {
        $('.text h4').hide().html('Wordpress Skills').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Good understanding of the CMS, practiced during internship and personnal project,<br> Visual Composer and Advanced Custom Fields/Custom Post Type.'],
            typeSpeed: 0
        });
    });

    //***********************************************************************************About_me
    $('.general').mouseenter(function() {
        $('#About_me .right h5').hide().html('About me').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('I am a 28 years-old web developper, currently learning at SIMPLonMARS in L\'école Centrale de Marseille.<br><br> I started learning web developpement on my own but wanted a more academic environnement to progress faster, <br><br> this is when I applied for SIMPLonMARS. <br><br> I\'ve been selected amongst 100+ candidates. I\'m currently learning there. <br><br> I am a Junior , yet extremely motivated , web developper!').fadeIn();
    });

    $('.past').mouseenter(function() {
        $('#About_me .right h5').hide().html('Past Experiences').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('I did an internship in the web agency PUBLICOM in Aix en Provence, I have a bachelor\'s degree in English and Japanese languages.<br><br> Between January 2013 and August 2016 I worked in an organic shop, as asssistant manager for the last year. <br><br> I\'ve also been volunteering in Scotland for two months in the past two years for a total of 4 months, this experience improved my understanding of english language.').fadeIn();
    });

    $('.languages').mouseenter(function() {
        $('#About_me .right h5').hide().html('Spoken Languages').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('French is my mother tongue but I am comfortable with English, <br><br> I still am a begginner in Japanese.').fadeIn();
    });

});
