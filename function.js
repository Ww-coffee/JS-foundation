function getId(id){
	return document.getElementById(id);
}


//根据访问浏览器的不同系统自动匹配返回基于w3c还是IE内核返回相应ajax对象
function cXHR(){
		try{return new XMLHttpRequest()}catch(e){};
		try{return new ActiveXobject('Microsoft.XMLHTTP')}catch(e){};
	}