$('.hamburger').on('click', function(){     
    $('#navigation').toggleClass('open');
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).addClass('inactive');
    } else if($(this).hasClass('inactive')) {
        $(this).removeClass('inactive');
        $(this).addClass('active');
    }
});

$('.nav-link').on('click', function(){     
    $('.hamburger').toggleClass('active');
	$('.hamburger').toggleClass('inactive');
    $('#navigation').toggleClass('open');
});

// parallax 
var rellax = new Rellax('.rellax');
