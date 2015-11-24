$(document).ready(function() {
  $(".beta").hide();

  $(".btn-warning").on("click",function(){
    $("h1").text(function(i, v){
      return v === 'Yo' ? 'Howdy' : 'Yo' 
    })
  });

  $(".btn-primary").on("click", function(){
    $(".beta").toggle(2000);
    $(this).text(function(i, v){
      return v === 'See More' ? 'See Less' : 'See More'
    })
  });
});


