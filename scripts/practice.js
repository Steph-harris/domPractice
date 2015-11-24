$(document).ready(function() {
  $("div").hide();

  $(".btn-warning").on("click",function(){
    $("h1").html("Howdy");
  });

  $(".btn-primary").on("click", function(){
    $("div").toggle();
  });
});


