 $(function(){
        $("#menu-bar-1").delay(1000).animate({marginLeft: "0"},"slow");
        $("#menu-bar-2").delay(1500).animate({marginLeft: "0"},"slow");
        $("#menu-bar-3").delay(2000).animate({marginLeft: "0"},"slow");
        $("#menu-bar-4").delay(2500).animate({marginLeft: "0"},"slow");
        $("#menu-bar-5").delay(3000).animate({marginLeft: "0"},"slow");
        $('.button-menu').delay(3500).fadeIn(400);
    });
  function rotate(){
    var deg = $(".button-menu").hasClass("rotate90");
    if (deg == true){
      $(".button-menu").removeClass("rotate90");
      $(".button-menu").addClass("rotate180");
      $(".sub-nav").hide(500);
      $(".left_nav ul li button span").removeClass("rotate-90");
            $("#menu-bar-5").delay(0).animate({marginLeft: "-180px"},"slow");
            $("#menu-bar-4").delay(500).animate({marginLeft: "-180px"},"slow");
            $("#menu-bar-3").delay(1000).animate({marginLeft: "-180px"},"slow");
            $("#menu-bar-2").delay(1500).animate({marginLeft: "-180px"},"slow");
            $("#menu-bar-1").delay(2000).animate({marginLeft: "-180px"},"slow");
    }
    if (deg == false){
      $(".button-menu").removeClass("rotate180");
      $(".button-menu").addClass("rotate90");
        $(".sub-nav").hide(500);
          $("#menu-bar-1").delay(0).animate({marginLeft: "0"},"slow");
          $("#menu-bar-2").delay(500).animate({marginLeft: "0"},"slow");
          $("#menu-bar-3").delay(1000).animate({marginLeft: "0"},"slow");
          $("#menu-bar-4").delay(1500).animate({marginLeft: "0"},"slow");
          $("#menu-bar-5").delay(2000).animate({marginLeft: "0"},"slow");
    }
  };

function sub(numb){
  if (numb == 2) {
    if ($('.sub-nav').css('display') == 'none') 
        { 
            $('.sub-nav').show(500); 
            $('#row2').addClass("rotate-90"); 
        } 
    else 
        {     
            $('.sub-nav').hide(500); 
            $("#row2").removeClass("rotate-90");
        } 
  }
  
};
