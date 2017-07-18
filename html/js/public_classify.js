$(document).ready(function(){
	//首页二级菜单
    var $subblock = $(".con_text"), 
    	$head=$subblock.find('h3'), 
    	$ul = $("#proinfo"), 
    	$lis = $ul.find("li");
	$head.hover(function(e){
		e.stopPropagation();
//		$ul.toggle()
		$head.next("#proinfo").toggle()
	});
	
//	$ul.hover(function(event){
//		event.stopPropagation();
//		$ul.show()
//	});
	$ul.mouseover((function(){
		$(this).show()
	}))
	$ul.mouseout((function(){
		$(this).hide()
	}))
	
	$(document).click(function(){
		$ul.hide();
//		inter=!inter;
	});

	$lis.mouseover(function(){
		$(this).find(".prosmore").addClass('hide');
	});
	
	$lis.mouseout(function(){
		$(this).find(".prosmore").removeClass('hide');
	});
})

		
	