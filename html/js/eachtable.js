$(function(){
	(function(){
			var _this = $('.ogo-add'),
				//_thisbox = $('.orm-ogo-box'),
				//_thistr = _thisbox.find('tr'),
				_oga = $('.oga-onlong'),
				_first = _oga.length,
			 	_sidedown = $('.orm-icon-down');
				_this.on('click',function(){
					var _oga = $('.oga-onlong'),
					 	_first = _oga.length,
					 	_omr = $('.orm-ogo-box'),					 	
						html = '';
						html += '<tr class="oga-onlong">';
						html +=	'<td>';
						html += '<input type="text" name="" id="" />';
						html += '</td>';
						html +=	'<td>';
						html += '<input type="text" name="" id="" />';
						html += '</td>';
						html +=	'<td>';
						html += '<input type="text" name="" id="" />';
						html += '</td>';
						html +=	'<td>';
						html += '<input type="text" name="" id="" />';
						html += '</td>';
						html +=	'<td>';
						html += '<input type="text" name="" id="" />';
						html += '</td>';
						html +=	'<td>';
						html += '<input type="text" name="" id="" />';
						html += '</td>';
						html += '<td>';						
/*						if(_first == 0){
							html += '<i class="orm-icon orm-icon-down"></i>';
						}else if(_oga.last()){							
							html += '<i class="orm-icon orm-icon-up"></i>';
						}
						if(_first != 0){
							_this = _omr.find('tr'),
							_this = _this.last(),
							_this = _this.find('td'),
							_this = _this.last(),
							_this = _this.find('i').eq(0),
							_this.before('<i class="orm-icon orm-icon-down"></i>');
						}*/	
						html += '<i class="orm-icon orm-icon-down"></i>';
						html += '<i class="orm-icon orm-icon-up"></i>';
						html += '<i class="orm-icon orm-icon-close"></i>';							
						html += '</td>';
						html += '</tr>';	
						_omr.append(html);
/*						str.push(html);
						$.each(str, function() {
							if(str[0]){
								$('.orm-icon-up').remove();
							}
						});*/
			});
/*			_oga.each(function() {
				console.log(_oga.index())
				if(_thistr.eq(1)){
					_this = $(this),
					//_this = _this.prev(),
					_this = _this.find('td'),
					_this = _this.last(),
					_this = _this.find('i.orm-icon-up'),
					_this.remove();
				}
			});*/
			//向下箭头
/*			$(document).on('click','.orm-icon-down',function(){
				_this = $(this),
				_this = _this.parents('tr'),
				_thisz = _this.clone(true),
				_thisnext = _this.next();
				_thisindex = _this.index();
				_this.remove();
				_thisnext.after(_thisz);				
				if(_thisindex !=0 && _oga.last()){
					_this = _thisz,
					_this = _this.find('td'),
					_this = _this.last(),
					_this = _this.find('i.orm-icon-down');
					_this.removeClass('orm-icon-down orm-icon-up').addClass('orm-icon-up');
				}
			});*/
			//向上箭头
/*			$(document).on('click','.orm-icon-up',function(){
				_this = $(this),
				_this = _this.parents('tr'),
				_thisz = _this.clone(true),
				_thisindex = _this.index();
				_this.remove();
				_thisz.prependTo('.orm-ogo-box');
				if(_thisindex !=0){
					_this = _thisz,
					_this = _this.find('td'),
					_this = _this.last(),
					_this = _this.find('i.orm-icon-up');
					_this.removeClass('orm-icon-up').addClass('orm-icon-down');
				}
			});*/
	})();	
});

