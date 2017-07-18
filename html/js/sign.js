//entire registration code
$(document).ready(function(){
	//手机验证
	function VerifyTheMobilePhone(phone){
		var _phone = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		if(_phone.test(phone)){
			return true;
		}
		return false;
	}
	//验证用户名
	function CheckUserName(username){
		var _username = /^[a-zA-Z0-9_]\w{2,15}[a-zA-Z0-9]$/ig;
		if(_username.test(username)){
			return true;
		}
		return false;
	}
	function signshow(show){
		show.siblings('.sign-check').show();
	}
	function singhide(hide){
		hide.siblings('.sign-check').hide();
	}
	//失去焦点验证用户名
	$('.username').blur(function (){
		var _this = $(this),
			_thisval = _this.val(),
			_thisp = _this.parents('.sign-itme'),
			_thisbox = _thisp.siblings('.sign-tip'),
			_thislog = _thisbox.find('.sign-error');
			//console.log(_thishtml.attr('class'))
		if(CheckUserName(_thisval)){
			signshow(_this);
			_thisbox.removeClass('sign-show');
			return true;
		}else{
			singhide(_this);
			_thisbox.addClass('sign-show');
			_thislog.html('格式错误，仅支持字母、数字、“_”的组合');
			return false;
		}
	});
	//失去焦点验证密码
	$('.password').on('blur',function(){
		var _this = $(this),
			_thisval = _this.val(),
			_thisp = _this.parents('.sign-itme'),
			_thisbox = _thisp.siblings('.sign-tip'),
			_thislog = _thisbox.find('.sign-error');
		var _number = /^[0-9]*$/;
		if(_thisval.length >= 6 && _thisval.length <= 16){
			signshow(_this);
			_thisbox.removeClass('sign-show');
			if(_number.test(_thisval)){
				_thisbox.addClass('sign-show');
				_thislog.html('有被盗风险,建议使用字母、数字和符号两种及以上组合');
				return true;
			}
		}else{
			singhide(_this);
			_thisbox.addClass('sign-show');
			_thislog.html('登录密码至少6位且包含字母与数字组合');
			return false;
		}
	})
	//失去焦点验证重复密码
	$('.removepass').on('blur',function(){
		var _this = $(this),
			_thisval = _this.val(),
			_thisp = _this.parents('.sign-itme'),
			_thisbox = _thisp.siblings('.sign-tip'),
			_thislog = _thisbox.find('.sign-error'),
			_thispass = $('.password').val();
		if(_thisval == _thispass){
			signshow(_this);
			_thisbox.removeClass('sign-show');
			return true;
		}else{
			singhide(_this);
			_thisbox.addClass('sign-show');
			_thislog.html('两次密码输入不一致');
			return false;
		}
	})
	//失去焦点验证手机号
	$('.sign-phono').on('blur',function(){
		var _this = $(this),
			_thisval = _this.val(),
			_thisp = _this.parents('.sign-itme'),
			_thisbox = _thisp.siblings('.sign-tip'),
			_thislog = _thisbox.find('.sign-error');
		if(VerifyTheMobilePhone(_thisval)){
			signshow(_this);
			_thisbox.removeClass('sign-show');
			return true;
		}else{
			singhide(_this);
			_thisbox.addClass('sign-show');
			_thislog.html('格式不正确');
			return false;
		}
	})
})
