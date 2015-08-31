$(document).ready(function(){
    
    
    $(".nextbutton").click(function() {
        $(".active").removeClass("active").addClass("hidden prev");
        $(".prev").next().addClass("active").removeClass("hidden").prev().removeClass("prev");
    });
    
    $(".prevbutton").click(function() {
        $(".active").removeClass("active").addClass("hidden next");
        $(".next").prev().addClass("active").removeClass("hidden").next().removeClass("next");
    });
    
    $(".card").click(function(){
        $(this).children(".answer").toggleClass("hidden");
    });
    
});