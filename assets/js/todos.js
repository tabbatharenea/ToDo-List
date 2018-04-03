//Check off specific todos by clickig

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on x to delete to do

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(1000,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//collect todo text from input
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash-alt'></i> </span>"+ todoText + "</li>");
  }
});

//toggle the input on and off
$("#toggle-form").click(function(){
  $("input[type='text']").fadeToggle();
});

