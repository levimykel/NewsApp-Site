$( document ).ready(function() {
  var background;
  $(".article-tile .tile").hover(function(){
    background = $( this ).css( "background" );
    var newBackground = 'linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), ' + background;
//    $(this).css( "background" , newBackground );
    $(this).children(".text").children("p").css( "color", "rgba(255,255,255,1)" );
    $(this).children(".text").css( "background-color", "rgba(0, 0, 0, 0.45)" );
    
  }, function(){
//    $(this).css( "background" , background );
    $(this).children(".text").css( "background-color", "rgba(0, 0, 0, 0)" );
    $(this).children(".text").children("p").css( "color", "rgba(255,255,255,0)" );
  });
});