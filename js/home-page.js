$(document).ready(function(){

$("#button-menu-open").click(function(){
    $("#button-menu-open").toggleClass("display-block display-none");
        console.log('[1.1]close->#button-menu-open==OK');
    $(".left_nav").animate({left:'+=300'}, function(){
        console.log('[1.2]left=+300->.left-nav==OK');
    });
    $(".left-nav-top").toggleClass("display-none display-block");
        console.log('[1.3]open->.left-nav-top==OK');
    openMenuBar();
});

$("#button-menu-close, .cd-slider-wrapper").click(function(){
  if ($(".left-nav-top").hasClass("display-block")){
    if ($("#sub-menu-students").hasClass("display-block")){
        console.log($("#sub-menu-students").hasClass("display-block"));
      $("#sub-menu-students").toggleClass("display-block display-none");
        console.log('[3.3]close->#sub-menu-students==OK');
    }
    if ($("#sub-menu-students-top").hasClass("display-block")){
        console.log($("#sub-menu-students-top").hasClass("display-block"));
      $("#sub-menu-students-top").toggleClass("display-block display-none");
        console.log('[3.4]close->#sub-menu-students-top==OK');
    }
    $("#sub-menu-students-img").toggleClass("display-block display-none");
    console.log('[4.4]close->#sub-menu-students-img==OK')
    $(".left-nav-top").toggleClass("display-block display-none");
        console.log('[2.2]close->.left-nav-top==OK');
    $(".left_nav").animate({left:'-=300'}, function(){
        console.log('[2.3]left=-300->.left-nav==OK');
    }); 
    $("#button-menu-open").toggleClass("display-none display-block");
        console.log('[2.4]open->#button-menu-open==OK');
    closeMenuBar();
  }
});

$("#menu-bar-3-click").click(function(){
    $("#left-nav-main").toggleClass("display-block display-none");
    console.log('[3.1]close->#left-nav-main==OK')
    $("#sub-menu-students").toggleClass("display-none display-block");
    console.log('[3.2]open->#sub-menu-students==OK')
    $("#sub-menu-students-top").toggleClass("display-none display-block");
    console.log('[3.3]open->#sub-menu-students-top==OK')
    $("#sub-menu-students-img").toggleClass("display-none display-block");
    if ($("#sub-menu-students-img").hasClass("display-none")){
      $("#sub-menu-students-img").toggleClass("display-none display-block");
    }
    console.log('[3.4]open->#sub-menu-students-img==OK')
    heightSubMenuStudentsImg();
});  

$("#back-left-nav-main").click(function(){
    $("#sub-menu-students-top").toggleClass("display-block display-none");
    console.log('[4.1]close->#sub-menu-students-top==OK');
    $("#sub-menu-students").toggleClass("display-block display-none");
    console.log('[4.2]close->#sub-menu-students==OK');
    $("#left-nav-main").toggleClass("display-none display-block");
    console.log('[4.3]close->#left-nav-main==OK')
    $("#sub-menu-students-img").toggleClass("display-block display-none");
    console.log('[4.4]close->#sub-menu-students-img==OK')
});

});

function openMenuBar(){
  $("#left-nav-main").toggleClass("display-none display-block");
      console.log('[1.4]open->#left-nav-main==OK');
  if ($("#left-nav-main").hasClass("display-none")){
    console.log($("#left-nav-main").hasClass("display-none"));
    $("#left-nav-main").toggleClass("display-none display-block");
      console.log('[1.5]close->#left-nav-main==OK');
  }
    positionMenuBar();
}

function closeMenuBar(){
  $("#left-nav-main").toggleClass("display-block display-none");
      console.log('[2.1]close->#left-nav-main==OK');
}

function positionMenuBar(){
  var leftNavHeght = $(".left_nav").height();
      console.log("! .left_nav = " + leftNavHeght);
  var leftNavTopHeght = $(".left-nav-top").height();
      console.log("! .left-nav-top = " + leftNavTopHeght);
  var leftNavMainLiCount = $("#left-nav-main>li").length;
      console.log("! кол-во -> #left-nav-main>li = " + leftNavMainLiCount);
  var leftNavMainLiHeghtPadding = $("#left-nav-main>li").outerHeight(true);
      console.log("! со всеми отступами -> #left-nav-main>li = " + leftNavMainLiHeghtPadding);
  var leftNavMainLiHeght = $("#left-nav-main>li").height();
      console.log("! без отступов -> #left-nav-main>li = " + leftNavMainLiHeght);
  var paddingLeftNavMainLi = leftNavMainLiHeghtPadding - leftNavMainLiHeght;
      console.log("! paddingLeftNavMainLi = " + paddingLeftNavMainLi);
  var leftNavHeghtUl = leftNavHeght - leftNavTopHeght - (leftNavMainLiHeghtPadding * leftNavMainLiCount);
      console.log("! leftNavHeghtUl = " + leftNavHeghtUl);
  var topLeftNavMainUl = leftNavHeghtUl/2  + paddingLeftNavMainLi;
      console.log("! topLeftNavMainUl = " + topLeftNavMainUl);
      $("#left-nav-main").css('top', topLeftNavMainUl + 'px');
          console.log('[1.5]top->positionMenuBar==OK');
}

function heightSubMenuStudentsImg(){
  var leftNavHeght = $(".left_nav").height();
      console.log("! .left_nav = " + leftNavHeght);
  var leftNavTopHeght = $(".left-nav-top").height();
      console.log("! .left-nav-top = " + leftNavTopHeght);
  var subMenuStudentsTopHeght = $("#sub-menu-students-top").height();
      console.log("! subMenuStudentsTopHeght = " + subMenuStudentsTopHeght);
  var subMenuStudentsImgHeight = leftNavHeght - leftNavTopHeght - subMenuStudentsTopHeght;
    $("#sub-menu-students-img").css({'height':subMenuStudentsImgHeight + 'px'});
}
