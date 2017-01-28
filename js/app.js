$(document).ready(function() {
    let colors = ['#ED7300', '#87C70F', '#00C9BF', '#FFA3B5', '#FFBF0F', '#663382'];

    // init Masonry
    var $grid = $('.grid').masonry({});
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });



    $(window).scroll(function() { //************************************************************event scoll menu

        if ($(document).scrollTop() == 0) {
            $('header').toggleClass('transparent');
        } else if ($(document).scrollTop() > 0 && $(document).scrollTop() < $('#Intro').height()) {
            $('header').addClass('transparent');
            $('header li:first-child a').addClass('active');
            $('header li:nth-child(2) a').removeClass('active');
            $('#retour').css("display", "none");
            $('header.transparent').css("background-color", "rgba(0, 0, 0, 0.2)");
        } else if ($(document).scrollTop() >= $('#Intro').height() && $(document).scrollTop() < $('#Intro').height() * 2) {
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

        } else if ($(document).scrollTop() >= $('#Intro').height() * 2 && $(document).scrollTop() < $('#Intro').height() * 3) {
            $('header li:nth-child(2) a').removeClass('active');
            $('header li:nth-child(4) a').removeClass('active');
            $('header li:nth-child(3) a').addClass('active');

        } else if ($(document).scrollTop() >= $('#Intro').height() * 3) {
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
      $('.burger').click(function(){
        $('header .nav').toggleClass("visible");
        $('body').toggleClass("overflow");
      });

      $('header .nav a').click(function(){
        $('header .nav').toggleClass("visible");
        $('body').toggleClass("overflow");
      });
    }

    //*************************************************************************************Skills display
    $('.html5').mouseenter(function(){
      $('.text h4').hide().html('HTML5 Skills').fadeIn();
      $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
      $('.text p').hide().html('Good overall knowledge of html5 elements, pretty easy language to learn.').fadeIn();
    });

    $('.css3').mouseenter(function(){
      $('.text h4').hide().html('Css3 Skills').fadeIn();
      $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
      $('.text p').hide().html('Good overall knowledge of Css3 selectors and pseudo-selectors.').fadeIn();
    });

    $('.jquery').mouseenter(function(){
      $('.text h4').hide().html('Jquery Skills').fadeIn();
      $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
      $('.text p').hide().html('Good understanding of Jquery equivalents to Javascript Vanilla.').fadeIn();
    });

    $('.javascript').mouseenter(function(){
      $('.text h4').hide().html('Javascript ES6 Skills').fadeIn();
      $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
      $('.text p').hide().html('Learned before Jquery, directly from ES6, good understanding of Fundamentals and more, Codewars rank : 5kyu.').fadeIn();
    });

    $('.angular').mouseenter(function(){
      $('.text h4').hide().html('AngularJS Skills').fadeIn();
      $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
      $('.text p').hide().html('Beginner but understands the logic behind, learning AngularJS 1.6.').fadeIn();
    });

    $('.back').mouseenter(function(){
      $('.text h4').hide().html('Back-End Skills').fadeIn();
      $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
      $('.text p').hide().html('Beginner, currently learning.').fadeIn();
    });

});
