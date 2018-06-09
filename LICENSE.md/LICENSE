Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @my-count
Sign out
0
0 0 my-count/php-foundation
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
php-foundation/The game
de18533  2 minutes ago
@my-count my-count The game.md
     
160 lines (142 sloc)  3.53 KB
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		#cont{
			width: 400px;
			height: 400px;
			border-top: 1px solid blue;
			border-bottom: 1px solid red;
			margin-top: 100px;
			margin-left: 150px;
			overflow: hidden;
		}

		#main{
			width: 400px;
			height: 400px;
			/*border-top:1px solid red;*/
			/*定位*/
			position: relative;
			top: -100px;
		}
		.row {
			height: 100px;
		}
		.row div{
			width: 98px;
			height: 100px;
			border:1px solid gray;
			float: left;
		}
		.black{
			background: black;
		}
	</style>
</head>
<body>
	<div id="cont">
	<div id="main"></div>
	</div>
	<input type="button" value="开始" id="go"></input>
	<input type="button" value="暂停" id="stop"></input>
	<input type="text" id="fen" value="0" disabled=""></input>
</body>
<script type="text/javascript">

function Youxi(){
	this.main = document.getElementById('main');
	this.clock;//定时器
	this.over = false;
	this.sudu = 1;

	//创建div工厂
	  this.cdiv = function(classNames){
            var div = document.createElement('div');
            if(classNames){
                div.className = classNames;
            }
            return div;
        }

	//创建一行div
        this.crow = function(){
        var row_div = this.cdiv('row');
        // 生成随机数
        var k = Math.floor(Math.random()*4)
        for(var i=0;i<4;i++){
            // 利用随机数做判断生成黑块
            if(i==k){
                row_div.appendChild(this.cdiv('black'));
            }else{
                row_div.appendChild(this.cdiv());
            }
        }
        return row_div;
    }

	//初始化div
	this.init = function(){
		for(var i=0;i<4;i++){
			this.main.appendChild(this.crow());
		}
		this.clock = setInterval('start.move()', 10);
		this.clicks();
	}


	this.clicks = function(){
		var that = this;
		this.main.onclick = function(ev){
			var fou = ev.target;
			if(that.over == true){
				alert('别挣扎了，游戏结束了')
			}else if(fou.className == 'black'){
				var fen = document.getElementById('fen');
				var fenshu = parseInt(fen.value);

				fen.value = ++fenshu;

				if(fenshu % 10 == 0){
					this.sudu += 0.5;
				}
				fou.className = '';
				fou.parentNode.pass = true;
			}else{
				that.stop();
				that.over = true;
				alert('游戏结束');
			}
		}
	}
	//游戏停止
	this.stop = function(){
		clearInterval(start.clock)
	}


	this.move = function(){
		var topInt = parseInt(getComputedStyle(this.main)['top']);
		//如果top大于0 创建一行 放到main的最前面
		if(topInt > 0){
			this.main.insertBefore(this.crow(),this.main.firstChild);
			this.main.style.top = '-100px';
			if(this.main.lastChild.pass == undefined){
				this.stop();
				this.over = true;
				alert('游戏结束');
			}else{
				if(this.main.children.length > 5){
					this.main.removeChild(this.main.lastChild);
				}
			}
		}else{
			//console.log(this.sudu);
			this.main.style.top = topInt + this.sudu + "px";
		}

	}
	
	//本来给setInterval(this.move,10)这两个参数.因为setInterval是window对象的一个方法.本段代码由浏览器执行找不到move中的this.crow等通过this查找的方法  而下面new了Youxi并赋值给start 而且start在全局中  所以由start.move来调取move方法
	//this.clock = setInterval('start.move()', 10);
}
	
	var start = new Youxi();
	//star.init();
	//调试代码
	document.getElementById('stop').onclick = function(){
		clearInterval(start.clock)
	}

	document.getElementById('go').onclick = function(){
			start.init();
	}

	
</script>
</html>
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.
