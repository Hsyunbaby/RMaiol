window.onload=function(){
			var aBtn=document.getElementsByTagName('b');
//			console.log(aBtn)
			var aGood=document.getElementsByClassName('bannertab');
//			var that = this;
			for(let i=0;i<aBtn.length;i++){
				aBtn[i].onmouseenter = function(){
					for(var j=0;j<aBtn.length;j++){
						aBtn[j].className= "";
						aGood[j].style.display = "none";
					}
					aBtn[i].className= "active";
					aGood[i].style.display = "block";
				}

			}
			for(let i=0;i<aGood.length;i++){
				aGood[i].onmouseenter = function(){
					aGood[i].style.display = "block";
					aBtn[i].className= "active";
					
				}
				aGood[i].onmouseleave = function(){
					aGood[0].style.display = "block";
					
				}
			}
		}