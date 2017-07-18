$(document).ready(function(){
	var _timer = 60;
	var _thishtml = '';
	function time(o){
		if(_timer == 0){
			o.removeClass("disabled"); 
			o._thishtml = "点击获取";
			o.html(o._thishtml)
	        _timer = 60;
		}else{
			o.addClass("disabled");
	        o._thishtml = _timer + "秒后可重发";
	        o.html(o._thishtml);
	        _timer--;
	        setTimeout(function() {
	            time(o)
	        },
	        1000)
		}
	}
	var _event = {
		onclick:function(){
			var _this = $('.ret-gain');
			_this.on('click',function(){
				time(_this)
				$('.ret-input').attr('disabled',false);
			})
		}
	}
	return _event.onclick();
})
