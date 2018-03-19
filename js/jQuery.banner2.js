;(function($){
	"use strict";
	$.fn.banners=function(options){
			this.local={
				index:0,
				iPrev:options.img.length-1
			}
//			console.log(options.img.eq(0).css("width"))
			var that=this;
			if(typeof options.left=='object'&&options.left.length!=0&&typeof options.right=='object'&&options.right.length!=0){
				options.left.on('click',function(){
					that.local.changeIndex('left');
//					that.local.leftMove(that.local.index,that.local.iPrev)
					that.local.move(that.local.index,that.local.iPrev,-1)
//					that.local.active(that.local.index)
				})
				options.right.on('click',function(){
					that.local.changeIndex('right');
//					that.local.rightMove(that.local.index,that.local.iPrev)
					that.local.move(that.local.index,that.local.iPrev,1)
//					that.local.active(that.local.index)
				})
			}
			this.local.changeIndex=function(dir){
//				console.log(that.local.index);
//				console.log(this);//this指向的是整个this.local
				if(dir=='left'){
					if(this.index==0){
						this.index=options.img.length-1;
						this.iPrev=0;
					}else{
						this.index--;
						this.iPrev=this.index+1;
					}
				}else{
					if(this.index==options.img.length-1){
						this.index=0;
						this.iPrev=options.img.length-1;
					}else{
						this.index++;
						this.iPrev=this.index-1;
					}
				}
			}
			if(typeof options.items=='object'&&options.items.length!=0){
				options.items.on('mouseenter',function(){
					that.local.iNext=$(this).index();
					if(that.local.index<that.local.iNext){
						that.local.move(that.local.iNext,that.local.index,1)
						that.local.active(that.local.iNext)
						
					}else{
						that.local.move(that.local.iNext,that.local.index,-1)
						that.local.active(that.local.iNext)
					}
					that.local.index=that.local.iNext;
				})
//				options.items.on('mouseleave',function(){
//					options.items.find("img").css({
//						border:""
//					})
//				})
			}
			if((options.autoPlay==undefined||options.autoPlay==true)&&(typeof options.right=='object'&&options.right.length!=0)){
				this.local.timer=setInterval(function(){
					options.right.trigger('click');
				},2000)
				this.hover(function(){
//					console.log(this);
					clearInterval(that.local.timer)
				},function(){
					that.local.timer=setInterval(function(){
						options.right.trigger('click');
					
					},2000)
				})
			}
			this.local.move=function(now,prev,num){
				options.img.eq(now).css({
					
					left:num*(parseInt(options.img.eq(0).css("width"))+110)
				}).stop(true,false).animate({
					left:40
				})
				options.img.eq(prev).stop(true,false).animate({
					left:-num*(parseInt(options.img.eq(0).css("width"))+110)
				})
			}
//			this.local.leftMove=function(now,prev){
//				options.img.eq(now).css({
//					
//					left:-parseInt(options.img.eq(0).css("width"))
//				}).stop(false,true).animate({
//					left:0
//				})
//				options.img.eq(prev).stop(false,true).animate({
//					left:parseInt(options.img.eq(0).css("width"))
//				})
//			}
//			this.local.rightMove=function(now,prev){
//				options.img.eq(now).css({
//					left:parseInt(options.img.eq(0).css("width"))
//				}).stop().animate({
//					left:0
//				})
//				options.img.eq(prev).stop().animate({
//					left:-parseInt(options.img.eq(0).css("width"))
//				})
//			}
//			this.local.active=function(index){
//				options.items.eq(index).css({
//					border:"2px solid #ff2f6f"
//				}).siblings().css({
//					border: ''
//				})
//			}
		}
})(jQuery)
