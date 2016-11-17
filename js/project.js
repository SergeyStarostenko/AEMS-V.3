$(document).ready(function(){
	var containerProjectTitleHight = $(".container-project-title").height();
    	console.log("hight -> .container-project-title = " + containerProjectTitleHight);
   	if (containerProjectTitleHight <= 400) {
   		$(".container-project-title>h1").css({'font-size': '3em'})
   		$(".container-project-title>p").css({'font-size': '1.5em'})
   	}
    var containerProjectTitleH1Hight = $(".container-project-title>h1").outerHeight(true);;
    	console.log("!со всеми отступами hight -> .container-project-title > h1 = " + containerProjectTitleH1Hight);
    var containerProjectTitlePHight = $(".container-project-title>p").outerHeight(true);
    	console.log("!!!со всеми отступами hight -> .container-project-title > p = " + containerProjectTitlePHight);
    var containerProjectTitleButtonHight = $(".container-project-title>button").outerHeight(true);
    	console.log("!!!со всеми отступами hight -> .container-project-title > button = " + containerProjectTitleButtonHight);
    var sumContainerProjectTitleH1PButton = containerProjectTitleH1Hight + containerProjectTitlePHight + containerProjectTitleButtonHight;
    	console.log("sum hight -> .container-project-title > h1 + p = " + sumContainerProjectTitleH1PButton);
	var  paddingTopContainerProjectTitleH1 = (containerProjectTitleHight - sumContainerProjectTitleH1PButton) / 2;
    	console.log("padding-top -> .container-project-title > h1 = " + paddingTopContainerProjectTitleH1);
   	$(".container-project-title>h1").css({'padding-top': paddingTopContainerProjectTitleH1 + 'px'});
    	console.log("padding-top -> .container-project-title > h1 == OK");
});