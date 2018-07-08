(function(){
	window.master=function(m){
		this.m = m ;
		this.init();
		this.x = 0;
		this.f = 0;
		this.m.arrmaster.push(this);
	}
	master.prototype.init=function(){
		var box1 = document.getElementsByClassName("box1")[0];
		this.dom =document.createElement("div");
		this.dom.className = "xiao";
		box1.appendChild(this.dom)
	}
	
	
	master.prototype.update=function(a){
		       var This = this;
			this.mast = setInterval(function(){
				This.x += 5;
				This.dom.style.left = This.x + "px";
				if(This.f > 3){
					This.f=0;
				}
				This.dom.style.background='url("img/2.png") no-repeat -'+32*This.f+'px -96px';
                 This.f++;
                 if(This.x > 450){
                 	This.x =-32;
                 }
                 
			},a)
	}
})()
