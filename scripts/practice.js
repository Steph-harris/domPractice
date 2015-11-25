$(document).ready(function() {
  $(".beta").hide();
  $(".alert-info").hide();

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

  $(".btn-primary").on("mouseover", function(){
    $(".alert-info").fadeToggle(2000);
  });
});


