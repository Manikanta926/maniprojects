$(document).ready(function(){
    $('.box').click(function() {        
        $(".box").removeClass("boxshrink boxactive");
        $(this).addClass("boxactive");
            if($(this).next().length>0){
                $(this).next().addClass("boxshrink").removeClass("boxactive");
            }
            else{
            $(this).prev().addClass("boxshrink").removeClass("boxactive");
            }
    });
    $(".block").click(function() {
        $(".block").removeClass("blockactive")
        $(this).addClass("blockactive");
    });
});