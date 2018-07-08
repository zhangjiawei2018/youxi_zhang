(function(){
	window.game=function(){
		this.dom;
		this.xxx;
		this.init();
        this.arrenemy = [];
        this.arrmaster=[];
        this.jq()
	};
	//多处会用到所以var全局
       var box = document.getElementsByClassName("box1")[0]
	game.prototype.init = function(){
		var This = this
		//获取一下按钮
	     var buttons = document.getElementsByTagName("button");
		//生成一个装按钮的数字
		var buts = []
		//生成玩家。位置位于鼠标点击的中心
		for(var i = 0 ; i < buttons.length ; i++){
			buts.push(buttons[i]);
			buts[0].onclick=function(ev){
				 var speed = this
			   This.xxx =(function(){
			    	if(speed==buts[0]){
			 	         return (0 + 15) *30
					}else if(speed == buts[1]){
						 return (1 + 15 )*20
					}else if(speed== buts[2]){
						 return (2 + 15 )*10
					}else if(speed == buts[3]){
						 return (3 + 15) *4
					}
		      })()
			    This.timer()
				var ev = ev || window.event;
				var x = ev.clientX - box.getBoundingClientRect().left - 75;
				var y = ev.clientY - box.getBoundingClientRect().top - 75;
				box.innerHTML = " ";
				This.dom = document.createElement("div")
				This.dom.className = "subject";
				This.dom.style.left = x + "px";
				This.dom.style.top = y + "px";
				box.appendChild(This.dom)
				This.drag()
				
				This.m1 = new master(This);
		        This.m1.update(50)
		        
		        This.m2 = new master(This);
		        This.m2.update(90)
		        
		        This.m3 = new master(This);
		        This.m3.update(40)
			}
		}
	}
	//拖拽
	game.prototype.drag=function(){
		var x = 0
		var y = 0
	   this.l = 0
		var t = 0
		var This = this
		this.dom.onmousedown = function(ev) {
			var ev = ev || window.event
			x = ev.clientX - This.dom.getBoundingClientRect().left;
			y = ev.clientY - This.dom.getBoundingClientRect().top;
			document.onmousemove = function(ev) {
				var ev = ev || window.event;
				this.l = ev.clientX - box.getBoundingClientRect().left - x;
				t = ev.clientY - box.getBoundingClientRect().top - y;

				if(this.l< -70) {
					this.l = -70
				} else if(this.l > box.offsetWidth - This.dom.offsetWidth + 70) {
					this.l = box.offsetWidth - This.dom.offsetWidth + 70
				}

				if(t < 0) {
					t = 0
				} else if(t > box.offsetHeight - This.dom.offsetHeight + 30) {
					t = box.offsetHeight - This.dom.offsetHeight + 30
				}
				This.dom.style.left = this.l + "px";
				This.dom.style.top = t + "px";
			}
			document.onmouseup = function() {
				document.onmousemove = null;
				document.onmouseup = null;
			}
			return false
		}
	}
	//
	//来一个定时器
	game.prototype.timer=function(){
		var This =this ;
		var f = 0
	 this.aaaa = setInterval(function(){
			f++
			 new enemy(This)
			  for(var i = 0 ; i < This.arrenemy.length; i++){
			  	 This.arrenemy[i].update()
			  }
		},this.xxx)
	}
	game.prototype.sss=function(odj1,odj2){
	 	            var T1 = odj1.offsetTop;
					var B1 = T1 + odj1.clientHeight;
					var L1 = odj1.offsetLeft;
					var R1 = L1 + odj1.clientWidth;
					var T2 = odj2.offsetTop;
					var B2 = T2 + odj2.clientHeight;
					var L2 = odj2.offsetLeft;
					var R2 = L2 + odj2.clientWidth;
					    
				   if(  B2 < T1 || T2 > B1 ||L2 > R1 || R2 < L1 ) {
						return false; // 没撞上
					} else {
						return true; // 撞上了
					}
	}
	
	game.prototype.jq=function(){
		$(".p2").click(function(){$(".box2").slideUp()})
		$(".p3").click(function(){$(".box3").slideUp()})
		$(".bu2").click(function(){$(".box2").slideDown()})
		$(".bu3").click(function(){$(".box3").slideDown()})
	}
})()
