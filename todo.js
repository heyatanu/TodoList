//Check the spacific todos
$("ul").on("click","li",function(){
    $(this).toggleClass("completed"); //toggele between linr throght and none
});
//click on x for delete
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();//stop the X to bubbeling through the parents like li body ul et
});
$("input[type='text']").keypress(function(event){
//which mean which key is press 
//13 mean it in the code of enter key
if(event.which===13)
{
   var todotext=$(this).val(); //Grab the input from the input box
   $(this).val("");
   //Create a new li and all to ui
   $("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+todotext+"</li>");
}
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()

});