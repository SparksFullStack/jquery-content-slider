$(document).ready(function(){
    var speed = 500;    // slide transition speed
    var autoswitch = true; // change value if you don't want the slider to auto switch
    var autoswitch_speed = 3000;

    // add initial active class
    $('.slide').first().addClass('active');

    // hide all slides
    $('.slide').hide();

    // show first slide
    $('.active').show();

    $('#next').on('click', function(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    })

    $('#previous').on('click', function(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    })

    if(autoswitch){
        setInterval(function(){
            $('.active').removeClass('active').addClass('oldActive');
            if ($('.oldActive').is(':last-child')){
                $('.slide').first().addClass('active');
            } else {
                $('.oldActive').next().addClass('active');
            }

            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
        }, autoswitch_speed);
    }
})