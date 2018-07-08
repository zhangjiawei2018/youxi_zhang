(function(){
	window.enemy=function(m){
		this.m = m
		this.enemys
		this.init()
		this.m.arrenemy.push(this)
	}
	enemy.prototype.init=function(){
		    var box = document.getElementsByClassName("box1")[0]
		    var a = null;
		    this.enemys = document.createElement("div");
			this.enemys.className = "enemy";
			var a = Math.random() * 440;
			this.enemys.style.left = a + "px";
			box.appendChild(this.enemys);
			this.y = 0
	}
     enemy.prototype.update =function(){
     	var box1 =document.getElementsByClassName("box1")[0];
		var This = this;
     	this.y+=50;
     	var a = [];
     	
		this.enemys.style.top = this.y + "px";
		if(this.y > 600){
			this.goDie()
		}
		var ene = document.getElementsByClassName("enemy")
			  if(ene.length > 20){$(".enemy").eq(0).remove()}
			  for(var i = 0 ; i <ene.length ; i++){
			  	a.push(ene[i])
			  	};
			  	
			for(var i = 0 ; i <a.length ; i++){
			  	    for(var j = 0 ; j < this.m.arrmaster.length ; j++){
			  	    	if(This.m.sss(a[i] , this.m.arrmaster[j].dom )){
				  	    	this.m.arrmaster[j].dom.style.background='url(img/boom2.png) no-repeat';
				            this.m.arrmaster[j].dom.style.backgroundSize="contain";
				  	    	clearInterval(this.m.arrmaster[0].mast)
				  	    	clearInterval(this.m.arrmaster[1].mast)
				  	    	clearInterval(this.m.arrmaster[2].mast)
				  	    	clearInterval(this.m.aaaa)
				  	    	
				  	    	setTimeout(function(){alert("游戏结束~！刷新重新来吧")},500);
				  	    	
			  	    	}
		 			}
			  	
			  	
			  	    if(This.m.sss(a[i],This.m.dom)){
			  	    	var This = this
			  	   	          var y = 1 ;
				  		a[i].style.background = "url(img/boom.png) no-repeat";
				  		(function(n){
				  			setTimeout(function(){
				  			   $(a[n]).remove();
				  		    },200)

				  		})(i)
			  	    }
			  	    
		  	}
     }
    enemy.prototype.goDie = function (){
      	for(var i = this.m.arrenemy.length - 1; i >= 0; i--){
               if (this.m.arrenemy[i] == this){
                   this.m.arrenemy.splice(i,1);
               }
           }
    }
})()
