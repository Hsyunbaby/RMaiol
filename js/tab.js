define(function(){
	function Tab(){
		
//		console.log(this.aimg)
	}
	
	Tab.prototype.init = function(abtn,aimg){
		this.abtn=abtn;
		this.aimg=aimg;
		var that = this;
		for(let i=0;i<this.abtn.length;i++){
			this.abtn[i].onmouseenter = function(){
				that.change(i);
			}
			this.abtn[i].onmouseleave = function(){
				that.aimg[i].style.display = "none";
				that.abtn[i].className= "";
			}
		}
		for(let i=0;i<this.aimg.length;i++){
			this.aimg[i].onmouseenter = function(){
				that.aimg[i].style.display = "block";
				that.abtn[i].className= "active";
				
			}
			this.aimg[i].onmouseleave = function(){
				that.aimg[i].style.display = "none";
				that.abtn[i].className= "";
				
			}
		}
	}
	Tab.prototype.change = function(index){
		for(let i=0;i<this.abtn.length;i++){
			this.abtn[i].className= "";
			this.aimg[i].style.display = "none";
		}
		this.abtn[index].className= "active";
		this.aimg[index].style.display = "block";
	}
	
	return new Tab();
})