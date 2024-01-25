$("input.btn").on("click",function(){
    $("input.btn").addClass("clr");
    setTimeout(function(){ $("input.btn").removeClass("clr");},100)
})