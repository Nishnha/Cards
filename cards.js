$(document).ready(function(){
    
    
    $(".next").click(function() {
        $(".active").removeClass("active").addClass("hidden prev");
        $(".prev").next().addClass("active").removeClass("hidden").prev().removeClass("prev");
    });
    
    $(".card").click(function(){
        $(this).children(".answer").toggleClass("hidden");
    });
    
});