$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY >500){
            $('.scroll-button').addClass("show");
        }else{
            $('.scroll-button').removeClass("show");
        }
    });

    //scroll up script
    $('.scroll-button').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Student","WebDeveloper","Freelancer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop: true
    });
    
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing2", {
        strings: ["Student","WebDeveloper","Freelancer","Designer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop: true
    });
    
});
