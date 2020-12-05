var offset;
var p = false;

function handleResize() {
    if($(window).width() < 992) {
        if(!p) {
            $('.background-img').attr('src', 'images/background7.jpeg');
            var plant = $("<img class='plant'>");
            $(plant).attr('src', 'images/background6.png');
            $('.content-rows').append(plant);
            p = true
        }

        document.body.height = window.innerHeight;
        $('.name-title').empty();
        $('.name-title').append('Nicole Pineda');

        $('.content').on('scroll', function(){
            if ($('.content').scrollTop()>=108 && !$('.nav-list').hasClass('sticky') && $('.name-title').html() === 'Nicole Pineda') {
                $('.nav-list').addClass('sticky');
                $('.content-rows').css("padding-top", "40px");
                if($(window).width() < 401)
                    $('.content').css("margin-top", "40px");
                else
                    $('.content').css("margin-top", "52px");
            }
            else if ($('.content').scrollTop()<108 && $('.nav-list').hasClass('sticky') && $('.name-title').html() === 'Nicole Pineda') {
               $('.nav-list').removeClass('sticky') ;
               $('.content').css("margin-top", "0px");
               $('.content-rows').css("padding-top", "30px");
            }
        });

        if($(window).width() < 601)
            offset = 90;
        else if($(window).width() < 769)
            offset = 110;
        else
            offset = 80;

    } else {
        $('.nav-list').removeClass('sticky');
        $('.name-title').empty();
        $('.name-title').append('Nicole&nbsp;&nbsp;<br/>&nbsp;&nbsp;Pineda');
        $('.content').css("margin-top", "30px");
        $('.content-rows').css("padding-top", "0px");

        offset = 0;

        if(p) {
            $('.background-img').attr('src', 'images/background3.jpeg');
            $('.plant').remove();
            p = false;
        }

        if($(window).width() >= 1800 || ($(window).height() >= 1100 && $(window).width() >= 1200 && $(window).width()< 1500)) {
            $('.background-img').attr('src', 'images/background2.jpeg');
        } else {
            $('.background-img').attr('src', 'images/background3.jpeg');
        }
    }
}

$(document).ready(function(){ 
    handleResize(); 

    $(window).on("resize", handleResize);

    $('.li1').click(function(){
        $('.content').animate({ scrollTop: $('#projects').position().top + offset}, 1200);
    });
    $('.li2').click(function(){
        $('.content').animate({ scrollTop: $('#about').position().top + offset}, 1200);
    });
    $('.li3').click(function(){
        $('.content').animate({ scrollTop: $('#resume').position().top + offset}, 1200);
    });
    $('.li4').click(function(){
        $('.content').animate({ scrollTop: $('#contact').position().top + offset + 30}, 1200);
    });

    $('.bwog-project').click(function(){
        $('.project-rows').fadeTo(500, 0);
        $('.project-rows').css("pointer-events", "none");
        $('#bwog').removeClass('hidden');
        $('#bwog').addClass('visible');
        if($(window).width() < 501) {$('.projects-content').css("padding-bottom", "180px");}
        else if($(window).width() < 576) {$('.projects-content').css("padding-bottom", "160px");}
        else if($(window).width() < 740) {$('.projects-content').css("padding-bottom", "130px");}
        else if($(window).width() > 1699) {$('.projects-content').css("padding-bottom", "200px");}
    });
    $('.tugalleton-project').click(function(){
        $('.project-rows').fadeTo(500, 0);
        $('.project-rows').css("pointer-events", "none");
        $('#tugalleton').removeClass('hidden');
        $('#tugalleton').addClass('visible');
        if($(window).width() < 501) {$('.projects-content').css("padding-bottom", "260px");}
        else if($(window).width() < 576) {$('.projects-content').css("padding-bottom", "240px");}
        else if($(window).width() < 740) {$('.projects-content').css("padding-bottom", "130px");}
        else if($(window).width() > 1699) {$('.projects-content').css("padding-bottom", "200px");}
    });
    $('.filler-project').click(function(){
        $('.project-rows').fadeTo(500, 0);
        $('.project-rows').css("pointer-events", "none");
        $('#filler').removeClass('hidden');
        $('#filler').addClass('visible');
        if($(window).width() < 501) {$('.projects-content').css("padding-bottom", "260px");}
        else if($(window).width() < 576) {$('.projects-content').css("padding-bottom", "240px");}
        else if($(window).width() < 740) {$('.projects-content').css("padding-bottom", "130px");}
        else if($(window).width() > 1699) {$('.projects-content').css("padding-bottom", "200px");}
    });
    $('.cookingcalc-project').click(function(){
        $('.project-rows').fadeTo(500, 0);
        $('.project-rows').css("pointer-events", "none");
        $('#cookingcalc').removeClass('hidden');
        $('#cookingcalc').addClass('visible');
        if($(window).width() < 501) {$('.projects-content').css("padding-bottom", "260px");}
        else if($(window).width() < 576) {$('.projects-content').css("padding-bottom", "240px");}
        else if($(window).width() < 740) {$('.projects-content').css("padding-bottom", "130px");}
        else if($(window).width() > 1699) {$('.projects-content').css("padding-bottom", "200px");}
    });
    
    $(document).mouseup(function(e) {
        if ($('#bwog').hasClass('visible')) {var container = $("#bwog");}
        else if ($('#tugalleton').hasClass('visible')) {var container = $("#tugalleton");}
        else if ($('#filler').hasClass('visible')) {var container = $("#filler");}
        else if ($('#cookingcalc').hasClass('visible')) {var container = $("#cookingcalc");}
        
        if (!$(e.target).hasClass('visible') && !$(e.target).closest(container).hasClass('visible')) {
            $('.project-rows').fadeTo(100, 1);
            $('.project-rows').css("pointer-events", "auto");
            container.removeClass('visible');
            container.addClass('hidden');
            if($(window).width() < 401) {$('.projects-content').css("padding-bottom", "60px");}
            else {$('.projects-content').css("padding-bottom", "100px");}
        }
    });

    $('.wp').hover(
        function() {$('.wp .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.wp .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.php').hover(
        function() {$('.php .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.php .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.html').hover(
        function() {$('.html .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.html .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.css').hover(
        function() {$('.css .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.css .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.jquery').hover(
        function() {$('.jquery .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.jquery .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.js').hover(
        function() {$('.js .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.js .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.react').hover(
        function() {$('.react .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.react .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.reactrouter').hover(
        function() {$('.reactrouter .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.reactrouter .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
    $('.boots').hover(
        function() {$('.boots .icon-hover').css({opacity: 1, transition: "opacity 0.3s"});},
        function() {$('.boots .icon-hover').css({opacity: 0, transition: "opacity 0.3s"});}
    );
});
