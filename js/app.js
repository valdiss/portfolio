$(document).ready(function() {
let colors = ['#ED7300', '#87C70F', '#00C9BF', '#FFA3B5', '#FFBF0F'];


    $(window).scroll(function() {//************************************************************event scroll header
        if ($(document).scrollTop() > 0) {
            $('header').addClass('transparent');
        }
				else if($(document).scrollTop() == 0) {
            $('header').removeClass('transparent');
        }
    });



		$(window).scroll(function() { //************************************************************event scoll menu
        if ($(document).scrollTop() > 0 && $(document).scrollTop() < $('#Intro').height()) {
            $('header li:first-child a').addClass('active');
						$('header li:nth-child(2) a').removeClass('active');
						$('#retour').css("display", "none");
        }
				else if($(document).scrollTop() >= $('#Intro').height() && $(document).scrollTop() < $('#Intro').height()*2) {
            $('header li:first-child a').removeClass('active');
						$('header li:nth-child(3) a').removeClass('active');
						$('header li:nth-child(2) a').addClass('active');
						$('#retour').css("display", "block");
        }
				else if($(document).scrollTop() >= $('#Intro').height()*2 && $(document).scrollTop() < $('#Intro').height()*3) {
            $('header li:nth-child(2) a').removeClass('active');
						$('header li:nth-child(4) a').removeClass('active');
						$('header li:nth-child(3) a').addClass('active');
        }
				else if($(document).scrollTop() >= $('#Intro').height()*3) {
            $('header li:nth-child(3) a').removeClass('active');
						$('header li:nth-child(4) a').addClass('active');
        }
    });



    $('a[href^="#"]').click(function() {//**************************************************event click menu
        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
        return false;
    });



    $("a").mouseup(function() {//**********************************************************erase link focus
        $(this).blur();
    });



		//*************************************************************************************Random color on VD hover
		$('h3').mouseenter(function(){
				$(this).css('color', colors[Math.floor(Math.random()*colors.length)]);
		});
		$('h3').mouseleave(function(){
				$(this).css('color', '#d2d9d9');
		});



		//**************************************************************************************Random colors on burger hover
		$('.burger').mouseenter(function(){
				$('.burger span:first-child').css('background-color', colors[Math.floor(Math.random()*colors.length)]);
				$('.burger span:nth-child(2)').css('background-color', colors[Math.floor(Math.random()*colors.length)]);
				$('.burger span:nth-child(3)').css('background-color', colors[Math.floor(Math.random()*colors.length)]);
		});
		$('.burger').mouseleave(function(){
				$('.burger span').css('background-color', '#d2d9d9');
		});

});
