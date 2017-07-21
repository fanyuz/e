$(function(){
	//详情页图片选项卡
	 $(document).ready(function(){
        $(".list_img li").click(function(){
       		$(".list_img li").eq($(this).index()).addClass("active").siblings().removeClass('active');
			$(".det_img li").hide().eq($(this).index()).show();
       
        });
    });
    //详情页切换颜色、尺码
    $(document).ready(function(){
    	$(".detail_list_chima li").click(function(){
    		$(".detail_list_chima li").eq($(this).index()).addClass("show").siblings().removeClass('show');
    	})
    	$(".detail_list_color li").click(function(){
    		$(".detail_list_color li").eq($(this).index()).addClass("show").siblings().removeClass('show');
    	})
    })
    
    
    
    //订单页确认收货地址
    $(document).ready(function(){
    	$(".add_ction li").click(function(){
    		$(".add_ction li").eq($(this).index()).addClass("show").siblings().removeClass('show');
    	})
    	
    })
    
    
    //首页二级菜单
    var $subblock = $(".con_text"), 
    	$head=$subblock.find('h3'), 
    	$ul = $("#proinfo"), 
    	$lis = $ul.find("li"), 
    	inter=false;
	
//	$head.click(function(e){
//		e.stopPropagation();
//		if(!inter){
//			$ul.show();
//		}else{
//			$ul.hide();
//		}
//		inter=!inter;
//	});
//	
//	$ul.click(function(event){
//		event.stopPropagation();
//	});
//	
//	$(document).click(function(){
//		$ul.hide();
//		inter=!inter;
//	});

	$lis.mouseover(function(){
		$(this).find(".prosmore").addClass('hide');
	});
	
	$lis.mouseout(function(){
		$(this).find(".prosmore").removeClass('hide');
	});
	
	
	
	//新增收货地址
	$("#address_add").click(function(){
		$(".shade_address_box").css("display","block")
	})
	$("#shade_span_end").click(function(){
		$(".shade_address_box").css("display","none")
	})
	
	
	
	// 商品数量加减
	var _commodity = $(".commodity_num"),
		_num = parseInt(_commodity.children(".num").val());
		$(".num_add").click(function(){
			_num ++;
			$(this).prev().val(_num)
		})
		$(".minus").click(function(){
			if(_num > 1){
				_num --;
			}else{
				_num = 1;
			}
			$(this).next().val(_num)
		})
	
	
})
