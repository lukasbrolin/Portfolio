//hej

$(document).ready(function(){

    window.addEventListener('scroll', function(){scrollWindow()},false);

    var scrollPos = 0;

    function scrollWindow(){
        if (((document.body.getBoundingClientRect()).top < scrollPos) && scrollPos === 0 ){
            $('html,body').animate({
                scrollTop: $(".content").offset().top},
                'slow');
        }
        // saves the new position for iteration
        scrollPos = (document.body.getBoundingClientRect()).top;
    }
})