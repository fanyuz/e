$(function(){
/*	var __ = '';
		__ += '<div class="float_lt men_margin_left_20 obg-box-itme dity_pos">';
		__ += '<a href="javascript:;" class="men_ltone">';
		__ += '<dl>';
		__ += '<dt class="men_itme_img">';
		__ += '<img src="'
		__ += '../images/0000000000000000000SHANGPINTUIJIAN.png';
		__ += '" alt="商品展示"/>';
		__ += '<dd class="men_itme_rmb">';
		__ += '<span class="men_rmb_n">';
		__ += '<i>¥</i>';
		__ += '<span>';
		__ += 88;
		__ += '</span>';
		__ += '<span>.00</span>';
		__ += '<span class="men_rmm_hua">';
		__ += '<i>¥</i>';
		__ += '<span>';
		__ += 99.00;
		__ += '</span>';
		__ += '</span>'
		__ += '</dd>'
		__ += '<dd>';
		__ += '<span class="men_itme_wenzi">';
		__ += '${data-name}';
		__ += '</span>';
		__ += '</dd>';
		__ += '</dl>';
		__ += '</a>';
		__ += '<div class="displayBox_hide">';
		__ += '<div class="statez commod_statess commod_posleft00">';
		__ += '<a href="javascript:;">加入购物车</a>';
		__ += '</div>';
		__ += '<div class="statea commod_statess commod_posright00">';
		__ += '<a href="javascript:;" class="ogo-cancel">取消收藏</a>';
		__ += '</div>';
		__ += '</div>';
		$('.commodity').append(__);	*/
		(function unThisEvent(){
			$('.obg-box-itme').on('mouseenter',function(){				
				_this = $(this),
				_this = _this.find('div.displayBox_hide');				
				if($('.ogo-zbzkkx').is(':hidden')){
					_this.stop().animate({height:'30px'},200);
				}
			})
			$('.obg-box-itme').on('mouseleave',function(){
				_this = $(this),
				_this = _this.find('div.displayBox_hide');
				_this.stop().animate({height:'0'},200)
			})
		})();
		(function cancelcollection(){
			$(document).on('click','a.ogo-cancel',function(){
				_this = $(this),
				_this = _this.parents('.obg-box-itme');
				//console.log(_this.attr('class'))
				_this.remove();
			})			
		}());
		//批量管理
		$('.tion_piliang').on('click',function(){
			var _thisname = $(this).html();
			if(_thisname == '批量管理'){
				$('.ogo-ionhide').show();
				$('.tion_piliang').html('取消管理');
				_this = $('.commodity'),
				_this = _this.find('div.obg-box-itme'),
				_this = _this.find('div.ogo-zbzkkx'),
				_this.show();
			}else{
				$('.ogo-ionhide').hide();
				$('.tion_piliang').html('批量管理');
				_this = $('.commodity'),
				_this = _this.find('div.obg-box-itme'),
				_this = _this.find('div.ogo-zbzkkx'),
				_this.hide();
				window.location.reload();
			}
		})
		//全选
		$('.ogo-button-1').on('click',function(){
			_this = $(this),
			//_this = _this.find('input[type="checkbox"]').attr('checked',true);
			_thischecked = _this.find('input[type="checkbox"]').attr('checked');
			console.log(_thischecked)
			if(_thischecked == 'checked'){
				$('.ogo-zbzkkx').removeClass('ogo-checkflase').addClass('ogo-checktrue');
			}else{
				$('.ogo-zbzkkx').addClass('ogo-checkflase').removeClass('ogo-checktrue');
			}
		})
		//取消收藏
		$('.ogo-remove').on('click',function(){
			 _this = $('.ogo-checktrue'),
			 _this = _this.parents('.obg-box-itme'),
			 _this.remove();
		})
		//自点击事件
		$(document).on('click','.ogo-zbzkkx',function(event){
			if($(this).hasClass('ogo-checkflase')){
				$(this).removeClass('ogo-checkflase').addClass('ogo-checktrue');
			}else{
				$(this).removeClass('ogo-checktrue').addClass('ogo-checkflase')
			}
			event.stopPropagation();
		})
})
