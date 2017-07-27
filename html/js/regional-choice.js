$(function(){
	/********** 大区数据 **********/
	var GP = new Array ('华东','华北','华中','华南','东北','西北','西南','港澳台','海外');
	/********** 省份数据 **********/
	var GP0 = new Array();
	GP0['华东'] = new Array('上海','浙江省','江苏省','安徽省','江西省');
	GP0['华北'] = new Array('北京','天津','山西省','山东省','河北省','内蒙古自治区');
	GP0['华中'] = new Array('湖南省','湖北省','河南省');
	GP0['华南'] = new Array('广东省','广西省','福建省','海南省');
	GP0['东北'] = new Array('辽宁省','吉林省','黑龙江省');
	GP0['西北'] = new Array('陕西省','新疆','甘肃省','宁夏','青海省');
	GP0['西南'] = new Array('重庆','西藏','四川省','云南省','贵州省');
	GP0['港澳台'] = new Array('香港','澳门','台湾省');
	GP0['海外'] = new Array('海外');
	//var GP0 = new Array('安徽','澳门','北京','福建','甘肃','广东','广西','贵州','海南','河北','河南','黑龙江','湖北','湖南','吉林','江苏','江西','辽宁','内蒙古','宁夏','青海','山东','山西','陕西','上海','四川','台湾','天津','西藏','香港','新疆','云南','浙江','重庆','海外');
	/********** 市级数据 **********/
	var GC1 = new Array();
	GC1['安徽省']=new Array('合肥','安庆','蚌埠','亳州','巢湖','池州','滁州','阜阳','淮北','淮南','黄山','六安','马鞍山','宿州','铜陵','芜湖','宣城');
	GC1['澳门']=new Array('澳门');
	GC1['北京']=new Array('北京');
	GC1['福建省']=new Array('福州','龙岩','南平','宁德','莆田','泉州','三明','厦门','漳州');
	GC1['甘肃省']=new Array('兰州','白银','定西','甘南','嘉峪关','金昌','酒泉','临夏','陇南','平凉','庆阳','天水','武威','张掖');
	GC1['广东省']=new Array('广州','潮州','东莞','佛山','河源','惠州','江门','揭阳','茂名','梅州','清远','汕头','汕尾','韶关','深圳','阳江','云浮','湛江','肇庆','中山','珠海');
	GC1['广西省']=new Array('桂林','百色','北海','崇左','防城港','贵港','河池','贺州','来宾','柳州','南宁','钦州','梧州','玉林');
	GC1['贵州省']=new Array('贵阳','安顺','毕节','六盘水','黔东南','黔南','黔西南','铜仁','遵义');
	GC1['海南省']=new Array('海口','白沙','保亭','昌江','澄迈','儋州','定安','东方','乐东','临高','陵水','南沙群岛','琼海','琼中','三亚','屯昌','万宁','文昌','五指山','西沙群岛','中沙群岛');
	GC1['河北省']=new Array('石家庄','保定','沧州','承德','邯郸','衡水','廊坊','秦皇岛','唐山','邢台','张家口');
	GC1['河南省']=new Array('郑州','安阳','鹤壁','焦作','济源','开封','洛阳','漯河','南阳','平顶山','濮阳','三门峡','商丘','新乡','信阳','许昌','周口','驻马店');
	GC1['黑龙江省']=new Array('哈尔滨','大庆','大兴安岭','鹤岗','黑河','鸡西','佳木斯','牡丹江','七台河','齐齐哈尔','双鸭山','绥化','伊春');
	GC1['湖北省']=new Array('武汉','鄂州','恩施','黄冈','黄石','荆门','荆州','潜江','神农架','十堰','随州','天门','仙桃','咸宁','襄樊','孝感','宜昌');
	GC1['湖南省']=new Array('长沙','常德','郴州','衡阳','怀化','娄底','邵阳','湘潭','湘西','益阳','永州','岳阳','张家界','株洲');
	GC1['吉林省']=new Array('长春','白城','白山','吉林','辽源','四平','松原','通化','延边');
	GC1['江苏省']=new Array('南京','常州','淮安','连云港','南通','苏州','宿迁','泰州','无锡','徐州','盐城','扬州','镇江');
	GC1['江西省']=new Array('南昌','抚州','赣州','吉安','景德镇','九江','萍乡','上饶','新余','宜春','鹰潭');
	GC1['辽宁省']=new Array('沈阳','鞍山','本溪','朝阳','大连','丹东','抚顺','阜新','葫芦岛','锦州','辽阳','盘锦','铁岭','营口');
	GC1['内蒙古自治区']=new Array('呼和浩特','阿拉善','巴彦淖尔','包头','赤峰','鄂尔多斯','呼伦贝尔','通辽','乌海','乌兰察布','锡林郭勒','兴安');
	GC1['宁夏']=new Array('银川','固原','石嘴山','吴忠','中卫');
	GC1['青海省']=new Array('西宁','果洛','海北','海东','海南','海西','黄南','玉树');
	GC1['山东省']=new Array('济南','滨州','德州','东营','菏泽','济宁','莱芜','聊城','临沂','青岛','日照','泰安','威海','潍坊','烟台','枣庄','淄博');
	GC1['山西省']=new Array('太原','长治','大同','晋城','晋中','临汾','吕梁','朔州','忻州','阳泉','运城');
	GC1['陕西省']=new Array('西安','安康','宝鸡','汉中','商洛','铜川','渭南','咸阳','延安','榆林');
	GC1['上海']=new Array('宝山','长宁','崇明','奉贤','虹口','黄浦','嘉定','金山','静安','卢湾','闵行','南汇','浦东','普陀','青浦','松江','徐汇','杨浦','闸北');
	GC1['四川省']=new Array('成都','阿坝','巴中','达州','德阳','甘孜','广安','广元','乐山','凉山','泸州','眉山','绵阳','内江','南充','攀枝花','遂宁','雅安','宜宾','资阳','自贡');
	GC1['台湾省']=new Array('台北','阿莲','安定','安平','八德','八里','白河','白沙','板桥','褒忠','宝山','卑南','北斗','北港','北门','北埔','北投','补子','布袋','草屯','长宾','长治','潮州','车城','成功','城中区','池上','春日','刺桐','高雄','花莲','基隆','嘉义','苗栗','南投','屏东','台东','台南','台中','桃园','新竹','宜兰','彰化');
	GC1['天津']=new Array('宝坻','北辰','大港','东丽','汉沽','和平','河北','河东','河西','红桥','蓟县','津南','静海','南开','宁河','塘沽','武清','西青');
	GC1['西藏']=new Array('拉萨','阿里','昌都','林芝','那曲','日喀则','山南');
	GC1['香港']=new Array('北区','大埔区','东区','观塘区','黄大仙区','九龙','葵青区','离岛区','南区','荃湾区','沙田区','深水埗区','屯门区','湾仔区','西贡区','香港','新界','油尖旺区','元朗区','中西区');
	GC1['新疆']=new Array('乌鲁木齐','阿克苏','阿拉尔','阿勒泰','巴音郭楞','博尔塔拉','昌吉','哈密','和田','喀什','克拉玛依','克孜勒苏柯尔克孜','石河子','塔城','图木舒克','吐鲁番','五家渠','伊犁');
	GC1['云南省']=new Array('昆明','保山','楚雄','大理','德宏','迪庆','红河','丽江','临沧','怒江','曲靖','思茅','文山','西双版纳','玉溪','昭通');
	GC1['浙江省']=new Array('杭州','湖州','嘉兴','金华','丽水','宁波','衢州','绍兴','台州','温州','舟山');
	GC1['海外']=new Array('海外');
	GC1['重庆']=new Array('巴南','北碚','璧山','长寿','城口','大渡口','大足','垫江','丰都','奉节','涪陵','合川','江北','江津','九龙坡','开县','梁平','南岸','南川','彭水','綦江','黔江','荣昌','沙坪坝','石柱','双桥','铜梁','潼南','万盛','万州','巫山','巫溪','武隆','秀山','永川','酉阳','渝北','渝中','云阳','忠县');
	//GC1['海外']=new Array('阿根廷','埃及','爱尔兰','奥地利','奥克兰','澳大利亚','巴基斯坦','巴西','保加利亚','比利时','冰岛','朝鲜','丹麦','德国','俄罗斯','法国','菲律宾','芬兰','哥伦比亚','韩国','荷兰','加拿大','柬埔寨','喀麦隆','老挝','卢森堡','罗马尼亚','马达加斯加','马来西亚','毛里求斯','美国','秘鲁','缅甸','墨西哥','南非','尼泊尔','挪威','葡萄牙','其它地区','日本','瑞典','瑞士','斯里兰卡','泰国','土耳其','委内瑞拉','文莱','乌克兰','西班牙','希腊','新加坡','新西兰','匈牙利','以色列','意大利','印度','印度尼西亚','英国','越南','智利');
	/****输出到HTML****/
	(function html(){
			var html = '';
				n = 0;	//循环添加ID
			$.each(GP, function(ia,_name) {
				html += '<dl class="region-screen">';
				html += '<dt class="reg-ogzb">';
				html += '<i class="reg-checkbox">';
				html += '</i>';						
				html += _name;
				html += '</dt>';		
				$.each(GP0[_name], function(ib,_thisname) {	
					html += '<dd class="reg-mouse">';
					html += '<span>';
					html += '<i class="reg-checkbox ogooz">';
					html += '</i>';
					html += _thisname;
					html += '<strong class="ogo-strong" >';			
					html += '</strong>';
					html += '</span>';
					html += '<div class="reg-ogo-box  clearfix">';
					html += '<b class="regbox-heise">';
					html += '<em class="regbox-baise">';
					html += '</em>';
					html += '</b>';
					$.each(GC1[_thisname], function(ic,_thisnamecls) {
						html += '<div class="itme-lilist">';						
						html += '<label class="ogo-label" for="oga';
						//html += ic;
						html += n;
						html += '">';
						html += '<input type="checkbox" name="" id="oga';
						//html += ic;
						html += n;
						html += '" value="" />';
						html += _thisnamecls;
						html +=	'</label>';
						html +=	'</div>';
						n++;
					});
					html +=	'</div>';
					html += '</dd>';
				});
				html += '</dl>';
			});
			$('.ogo-ssg').append(html)			
	})();
	//控制提示个数的显示
	function ShowTipNum(){			
		var m = $('.region-screen').find('.reg-mouse');
		m.each(function(i,a){
			_old = $(this).find('.itme-lilist').find('input[type="checkbox"]').length;
			_new = $(this).find('.itme-lilist').find('input[type="checkbox"]:checked').length;
			if(_new != 0){
				$(this).find('.ogo-strong').html('('+_new+'/'+_old+')');
			}else{
				$(this).find('.ogo-strong').html('');
			}
		})

	}
	//
	(function(){
		$(document).on('click','dt.reg-ogzb',function(event){
			var _this = $(this),
				_this = _this.find('i.reg-checkbox');
				if(!_this.hasClass('checkall')){
					_this.removeClass('checkoff').addClass('checkall');
					_this = $(this),
					_this = _this.nextAll('dd'),
					_thisInput = _this.find('input[type="checkbox"]'),
					_thisname = _this.find('i.reg-checkbox'),					
					_thisname.addClass('checkall');
					_thisInput.attr('checked',true);
					ShowTipNum();
				}else{
					_this.removeClass('checkall');
					_this = $(this),
					_this = _this.nextAll('dd'),
					_thisInput = _this.find('input[type="checkbox"]'),
					_thisname = _this.find('i.reg-checkbox'),					
					_thisname.removeClass('checkall');
					_thisInput.attr('checked',false);
					ShowTipNum();
				}
			event.stopPropagation();
		});
		$(document).on('click','.ogooz',function(event){
			if($(this).hasClass('checkall')){
				$(this).removeClass('checkall');
				_this = $(this),
				_this = _this.parent('span'),
				_this = _this.next('.reg-ogo-box'),
				_this = _this.find('input[type="checkbox"]');
				_this.attr('checked',false);
				ShowTipNum();
			}else{
				$(this).removeClass('checkoff').addClass('checkall');
				_this = $(this),
				_this = _this.parent('span'),
				_this = _this.next('.reg-ogo-box'),
				_this = _this.find('input[type="checkbox"]');
				_this.attr('checked',true);
				ShowTipNum();
			}
			_rem = $(this).parents('dl'),
			_remdd = _rem.find('dd'),
			_remove = _rem.find('dt'),
			_remove = _remove.find('i.reg-checkbox');
			_remdd.each(function(i,a){
				_ogoold = _remdd.find('i.checkall').length;			//获取包含这个class的个数；				
				_ogonew = _remdd.find('i.reg-checkbox').length;		//获取i的个数
				console.log(_ogoold)
				if(_ogoold == 0){
					_remove.removeClass('checkall checkoff');
				}else if(_ogoold != _ogonew){
					_remove.removeClass('checkall').addClass('checkoff');
				}else{
					_remove.addClass('checkall').removeClass('checkoff');
				}
			})
			event.stopPropagation();
		})
		$(document).on('click','.ogo-label',function(event){
			var _this = $(this),
				_thisp = _this.parents('dl'),
				_thisdt = _thisp.find('dt'),
				_thisdd = _thisp.find('dd');
				_thisdd.each(function(i,a){
					_true = $(this).find('input[type="checkbox"]:checked').length;
					_false = $(this).find('input[type="checkbox"]').length;
					if(_true == 0){
						$(this).find('i.reg-checkbox').removeClass('checkall checkoff');
					}else if(_true != _false){
						$(this).find('i.reg-checkbox').removeClass('checkall').addClass('checkoff');
					}else{
						$(this).find('i.reg-checkbox').removeClass('checkoff').addClass('checkall');
					}
				})
				ShowTipNum();
			event.stopPropagation();
		})
	})();
})
