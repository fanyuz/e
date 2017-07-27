//上传图片
window.onload = function(){
	var ormBgBgbox = document.getElementById('orm-bg-bgbox'),
		ormImages = document.getElementById('orm-images');
		ormBgBgbox.addEventListener("click",function(){
			ormImages.click();
			ormImages.addEventListener("change",function(){
				var files=this.files[0],
				fileObj=new FileReader();
				fileObj.readAsDataURL(files);
				fileObj.onload=function(){
					ormBgBgbox.innerHTML="<img src='" + this.result + "' />"
				}
			},false)	
		},false)
}