$(document).ready(function(){
	var _this = $('.order-submit'),
		_conlose = $('.itmeclose'),
		_ogbsubmit = $('.ogb-submit'),
		_alert = $('.alert');
	$.each(_this, function() {
		_this = $(this);
		_this.on('click',function(){
			_alert.show();
		});
	});
	function onclose(obj){
		obj.on('click',function(){
			_alert.hide();
		})
	}
	onclose(_conlose);
	onclose(_ogbsubmit);
	//quanxuan
	var _check = {
		all:function(){
			var _this = $('#checkbox'),
				_tcheck = $('.order-tables'),
				_tcheck = _tcheck.find('input[type="checkbox"]');
			
			_this.on('click',function(){
				var flag = $(this).prop('checked');
				if(flag){
					_tcheck.prop('checked',true)
				}else{
					_tcheck.prop('checked',false)
				}
			})
		}
		
	}
	return _check.all();
})
