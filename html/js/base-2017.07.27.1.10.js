$(function(){
/*	function appEndTo(){
		var __ = '';
			__ += '<div class="ogo-zz-bgo">';
			__ += '<div class="bgo-title bgo-sition">';
			__ += '<h4>提示信息</h4>';
			__ += '<div class="bgo-true">';
			__ += '<div class="bgo-true-ok">确认删除该地址？<b>(删除后不可恢复)</b></span></div>';
			__ += '<div class="del-dialog-actions">';
			__ += '<a href="javascript:;" class="bgo-button">确认</a>';
			__ += '<a href="javascript:;" class="bgo-button">取消</a>';
			__ += '</div>';
			__ += '</div>';
			__ += '</div>';
			__ += '</div>';
			$('body').append(__);
	}*/
	(function(){
		$(document).on('click','.ogo-remove-this',function(event){
			var _this = $(this);
			$('.ogo-zz-bgo').show(0,function(){
				$('.bgo-button').on('click',function(){
					_thisval = $(this).html();
					if(_thisval == '确认'){
						_thisparent = _this.parents('.site_table');
						$('.ogo-zz-bgo').hide();
						_thisparent.remove();
					}else{
						$('.ogo-zz-bgo').hide();
					}			
				})
			})
			event.stopPropagation();
		})
		$(document).on('click','.ogo-default-this',function(event){
			_this = $(this),
			_thisP = _this.parents('.site_table');
			if(!$('.site_table').hasClass('.bg-f18e00')){
				$('.site_table').removeClass('bg-f18e00');
				$('.ogo-default-this').html('设为默认');
				_thisP.addClass('bg-f18e00');					
				_thisP.clone(true);
				_this.html('');
				$('.obg-itme').after(_thisP);
			}
			event.stopPropagation();
		})
	})();
})
