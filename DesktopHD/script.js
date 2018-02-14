$(document).ready(function(){
    $(".arrow1").click(function(){
        var cloned_obj=$('.Rectangle:first').clone();
        cloned_obj.css("margin-left","0px");
        cloned_obj.css("margin-top","17px");
        cloned_obj.css("vertical-align","top");
        cloned_obj.insertAfter('.Rectangle:first');
    });
    $(".Shape").click(function(){
        var cloned_shape=jQuery(".block1:first").clone(true);
        cloned_shape.insertAfter(".block1:first");
    });
    $(".Shape1").click(function(){
        var cloned_shape1=jQuery(".block2:first").clone(true);
        cloned_shape1.insertAfter(".block2:first");
    });
    $(".Shape2").click(function(){
        var cloned_shape2=jQuery(".block3:first").clone(true);   
        cloned_shape2.insertAfter(".block3:first");
    });
    $(".Shape3").click(function(){
        var cloned_shape3=jQuery(".block4:first").clone(true);     
        cloned_shape3.insertAfter(".block4:first");
    });
});