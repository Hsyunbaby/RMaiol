		//补零
		function zero(num){
			if(num<10){
				return '0'+num;
			}else{
				return num;
			}
		}
		//获取日期
		function getDate(){
			var oDate=new Date();
			var iYear=oDate.getFullYear();
			var iMonth=zero(oDate.getMonth()+1);
			var iDay=zero(oDate.getDate());
			var iHour=zero(oDate.getHours());
			var iMInute=zero(oDate.getMinutes());
			var iSecond=zero(oDate.getSeconds());
		};
		//获取十六进制颜色
		function getColor(){
			var r=zero(Math.round(Math.random()*255).toString(16));
			var g=zero(Math.round(Math.random()*255).toString(16));
			var b=zero(Math.round(Math.random()*255).toString(16));
			return "#"+r+g+b;
		};
		//获取iD
		function $(id){
			return document.getElementById(id);
		}
		//添加监听事件，如果不要移除可以不用句柄fn来实现，直接写函数
		function addEvent(ele,myEvent,fn){
			if(ele.addEventListener){
				ele.addEventListener(myEvent,fn);
			}else if(ele.attachEvent){
				ele.attachEvent('on'+myEvent,fn);
			}else{
				ele['on'+myEvent]=fn;
			}
		}
		function removeEvent(ele,myEvent,fn){
			if(ele.addEventListener){
				ele.removeEventListener(myEvent,fn);
			}else if(ele.detachEvent){
				ele.detachEvent('on'+myEvent,fn);
			}else{
				ele['on'+myEvent]=null;
			}
		}
		//设置cookie
		function setCookie(name,value,timer){
	        var date =new Date;
	        date.setDate(date.getDate()+timer);
	        document.cookie = name+"="+value+";expires="+date;
	    }
	    
	    //获取cookie
	    function getCookie(name){
			var str=document.cookie;
			var arr=str.split('; ');
			var newArr=[];
			for(var i=0;i<arr.length;i++){
				newArr.push(arr[i].split('='));
			}
			for(var i=0;i<newArr.length;i++){
				if(name==newArr[i][0]){
					return newArr[i][1];
				}
			}
		}
	    
	  //  删除cookie
	    function removeCookie(name){
	        setCookie(name,1,-1);
	    }
	   //事件委托
	   function eventEnt(arr,fn){
			return function(eve){
				var e=eve||window.event;
				var target=e.target||e.srcElement;
				for(var i=0;i<arr.length;i++){
					if(arr[i]==target){
						arr[i].index=i;
						fn.bind(target)();
					}
				}
			}
		}
	   //防止冒泡
	   function pre(eve){
	   	var e=eve||window.event;
	   	 if(e.cancelBubble){
	   	 	e.cancelBubble=true;
	   	 }else{
	   	 	e.stopPropagation();
	   	 }
	   }
	   
	   //阻止浏览器默认
	   function stop(e){
	   	 var e=eve||window.event;
	   	 if(e.preventDefault){
	   	 	e.preventDefault();
	   	 }else{
	   	 	e.returnValue=false;
	   	 }
	   }
	   //获取非行内样式
	   function getStyle(obj,attr){    //获取非行间样式，obj是对象，attr是值
        if(obj.currentStyle){          //针对ie获取非行间样式
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,false)[attr];   //针对非ie
        };
    };
        //缓冲运动
        function move(obj,json,fn){
        	clearInterval(obj.timer);
        	obj.timer=setInterval(function(){
        		var onOff=true;
        		for(let attr in json){
        			if(attr=='opacity'){
        				var iNow=getStyle(obj,attr)*100
        			}else{
        				var iNow=parseInt(getStyle(obj,attr))
        			}
        			var speed=(json[attr]-iNow)/20;
        					speed=speed>0?Math.ceil(speed):Math.floor(speed);
        			if(json[attr]!=iNow){
        				onOff=false;
        			}
        			if(attr=='opacity'){
        				obj.style.opacity=(iNow+speed)/100;
        				obj.style.filter='alpha(opacity='+(iNow+speed)+')';
        			}else{
        				obj.style[attr]=iNow+speed+'px';
        			}
        		}
        		if(onOff){
        			clearInterval(obj.timer);
        			if(fn){
        				fn();
        			}
        		}
        	},30)
        }
		//ajax的封装；
		function getAjax(url,callback){
//			1.创建一个ajax对象
			if(window.XMLHttpRequest){
				var ajax = new XMLHttpRequest();
			}else{
				var ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
//			2.拨号
			ajax.open("GET",url,true);
//			4.歪!
			ajax.send(null);
//			3.检测状态
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.status == 200){
//					omsg.innerHTML = ajax.responseText;
//					return ajax.responseText;
					callback(ajax.responseText);
				}
			}
		}