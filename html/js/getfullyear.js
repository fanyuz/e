$(function(){
    var i=1930;
    var date = new Date();
    year = date.getFullYear();//获取当前年份  
    var dropList;
    for(i;i<=year;i++){      
        if(i == year){
            dropList = dropList + "<option value='"+i+"' selected>"+i+"</option>";
        }else{
            dropList = dropList + "<option value='"+i+"'>"+i+"</option>";
        }      
    }
    $('select[name=year]').html(dropList);//生成年份下拉菜单
    var monthly;
    for(month=1;month<13;month++){
        monthly = monthly + "<option value='"+month+"'>"+month+"</option>";
    }
    $('select[name=month]').html(monthly);//生成月份下拉菜单
    var dayly;
    for(day=1;day<=31;day++){
        dayly = dayly + "<option value='"+day+"'>"+day+"</option>";
    }
    $('select[name=day]').html(dayly);//生成月份下拉菜单
  
    $('select[name=month]').change(function(){
        var currentDay;
        var Flag = $('select[name=year]').val();
        var currentMonth = $('select[name=month]').val();
        switch(currentMonth){
            case "1" :total = 31;break;
            case "3" :total = 31;break;
            case "5" :total = 31;break;
            case "7" :total = 31;break;
            case "8" :total = 31;break;
            case "10" :total = 31;break;
            case "12" :total = 31;break;
            case "4" :total = 30;break;
            case "6" :total = 30;break;
            case "9" :total = 30;break;
            case "11" :total = 30;break;
            case "2" :
   			if (Flag % 4 == 0 && Flag % 100 != 0 || Flag % 400 == 0){
                 //if((Flag%4 == 0 && Flag != 0) || Flag@0 == 0){
	                    total = 29;
	                }else{
	                    total = 28;
	                }
            	default:break;              
        	}      
        	for(day=1;day <= total;day++){
            	currentDay = currentDay + "<option value='"+day+"'>"+day+"</option>";
        	}
        	$('select[name=day]').html(currentDay);//生成日期下拉菜单
        	
       }) 				
})