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

    if ($(window).width() <= 801) {

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
        $('.text h4').hide().html('Connaissances en HTML5/CSS3').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Bonne connaissance des balises HTML, des sélecteurs et pseudo-sélecteurs CSS.'],
            typeSpeed: 0
        });
    });

    $('.jquery').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en Jquery').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Bonne maitrise globale.'],
            typeSpeed: 0
        });
    });

    $('.javascript').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en Javascript ES6').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Appris avant Jquery, directement en ES6, bonne compréhension des fondamentaux et plus,<br> rang Codewars : 5kyu.'],
            typeSpeed: 0
        });
    });

    $('.angular').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en Angular').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Bonne compréhension d\'Angular, appris à l\'aide de la plateforme d\'apprentissage Udemy <br>en suivant le cours de Maximilian Schwartzmüller <br><em>Angular 4 (formerly Angular 2) - The Complete Guide</em>.'],
            typeSpeed: 0
        });
    });

    $('.reactjs').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en React').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Bonne compréhension des Components, des props et des states.'],
            typeSpeed: 0
        });
    });

    // *****************************************************************************Back-End
    $('.php').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en PHP').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Bonne compréhension des fondamentaux et de la programation orienté objet.'],
            typeSpeed: 0
        });
    });

    $('.nodejs').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en Nodejs').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Débutant, en cours d\'apprentissage avec Express.'],
            typeSpeed: 0
        });
    });

    $('.mysql').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en SQL').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Bonne compréhension des fondamentaux et des tables relationnelles.'],
            typeSpeed: 0
        });
    });

    $('.symfony').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en Symfony').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Pratiqué lors d\'exercices, bonne compréhension de Doctrine, des Entities, des Actions, <br> de CRUD et du routing sous forme d\'annotations.'],
            typeSpeed: 0
        });
    });

    $('.mongo').mouseenter(function() {
        $('.text h4').hide().html('Connaissances en MongoDb').fadeIn();
        $('.text h4').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('.text p').typed({
            strings: ['Débutant, en cours d\'apprentissage avec mongoose.'],
            typeSpeed: 0
        });
    });

    //***********************************************************************************About_me
    $('.general').mouseenter(function() {
        $('#About_me .right h5').hide().html('A propos de moi').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('Je suis un développeur web de 28 ans, diplomé de la formation SIMPLonMARS à L\'école Centrale de Marseille.<br><br> J\'ai débuté le développement web seul mais recherchais un cadre plus académique afin de progresser plus rapidement, <br><br> J\'ai alors candidaté à SIMPLonMARS. <br><br> Je fus alors sélectionné parmis plus de 100 candidats. <br><br> Je suis un développeur Junior extrêmement motivé!').fadeIn();
    });

    $('.past').mouseenter(function() {
        $('#About_me .right h5').hide().html('Mes expériences').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('J\'ai effectué un stage dans l\'agence de Communication PUBLICOM à Aix en Provence, j\'ai une licence en Langues Etrangères Appliquées Anglais-Japonais.<br><br> De Janvier 2013 à Aout 2016 j\'ai travaillé dans une enseigne biologique, la dernière année je suis passé directeur adjoint, alors responsable de 4 employés. <br><br> J\'ai également fait du volontariat en Ecosse, 2 mois pendant 2 ans pour un total de 4 mois, cette expérience m\'a permis de renforcer mon Anglais.').fadeIn();
    });

    $('.languages').mouseenter(function() {
        $('#About_me .right h5').hide().html('Langues parlées').fadeIn();
        $('#About_me .right h5').css("color", colors[Math.floor(Math.random() * colors.length)]);
        $('#About_me .right p').hide().html('Le français est ma langue maternelle mais je suis à l\'aise en Anglais, <br><br> J\'ai un niveau débutant en Japonais.').fadeIn();
    });

});
