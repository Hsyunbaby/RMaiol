$(function(){
	$('.first').hover(function(){
		$('#carnav').css({display:'block'})
	},function(){
		$('#carnav').css({display:'none'})
	})
	$('#carnav').hover(function(){
		$('#carnav').css({display:'block'})
	},function(){
		$('#carnav').css({display:'none'})
	})
	$('.last').hover(function(){
		$('#Lnav').css({display:'block'})
	},function(){
		$('#Lnav').css({display:'none'})
	})
	$('#Lnav').hover(function(){
		$('#Lnav').css({display:'block'})
	},function(){
		$('#Lnav').css({display:'none'})
	})
	lunbaner('.allbanner');
	lunbaner('.girlbanner');
	lunbaner('.boybanner');
	lunbaner('.makebanner');
	lunbaner('.childbanner');
	lunbaner('.livebanner');
	lunbaner('.foodbanner');
	anim(".bottomcont1");
	anim(".bottomcont2")
	anim(".bottomcont3")
	anim(".bottomcont4")
	anim(".bottomcont5")
	anim(".bottomcont6")
	//商品详情页
//	console.log($(".contbox").children(".leftcont").find("img"))
//	$(".contbox").children(".leftcont").find("img").eq(0).click(function(){
//		console.log(1)
//		
//		
//	})
	
	
	
	//nav的tab
	$('#lis').find('li').on("mouseenter",function(){
				$(this).children().css({
					color:"#cc0000"
				}).end().siblings().children().css({
					color:"#646468"
				})
				$('#sbanner').children().eq($(this).index()).css({
					display:"block"
				}).siblings().css({
					display:"none"
				})
			})
	$('.rightnav').children('.bnav').find('span').eq(0).on('click',function(){
				clearInterval(iTimer);
				var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
				var iTimer = setInterval(function () {
					iScrollT -= 100;
					
					if(iScrollT <= 0) {
						iScrollT = 0;
						clearInterval(iTimer);
					}
		
					document.body.scrollTop = iScrollT;
					document.documentElement.scrollTop = iScrollT;
				}, 50);
			})	
			//jquery里面没有offsetheight,写在jq里面没有值
			var offH=document.body.offsetHeight||document.documentElement.offsetHeight;
			$('.rightnav').children('.bnav').find('span').eq(1).click(function(){
					var t = $(window).scrollTop();
//					console.log(offH)
					t+=500;
					if(t>offH){
						t=offH;
					}
					$('body,html').stop(true,false).animate({'scrollTop':t+500},1000)
				})
			$(document).on('scroll',function(eve){
				if(document.body.scrollTop>=0){
					$('.rightnav').css({
						position:"fixed",
						top:134
					})
				}else{
					$('.rightnav').css({
						position:"fixed",
						top:40
					})
				}
				
			})
	$("#txt").keyup(function(){
			$.ajax({
				type:"post",
				url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
				data:{
					selectText:$("input[type=text]").val(),
				},
				success:function(res){
					console.log(res)
					var myStr='';
					for(let i=0;i<res.length;i++){
						myStr+=`<li><img src="${res[i][3]}"><span>${res[i][2]}</span></li>`;
					}
					document.getElementById("sLi").innerHTML=myStr;
					
//					console.log(myStr)
					var aStr=$("#sLi").children();
					$("#sLi").children().on("mouseenter",function(){
						$(this).css({
							background:"bisque"
						}).siblings().css({
							background:"",
						})
					}).click(function(){
						$("#txt").val($(this).find('span').html());
						$("#sLi").css({
							display:"none"
						})
					})
					
//					.on("mouseleave",function(){
//						console.log(this)
//						$(this).css({
//							backgroun:""
//						})
//					})
//					console.log(aStr)
					//在jq中js语句不能用
//					for(let j=0;j<aStr.length;j++){
//						aStr[j].on("mouseenter",function(){
//							aStr[j].style.background='lightgreen';
//						})
//						aStr[j].click(function(){
//							$("#txt").val()=aStr[j].innerHTML;
//						})
//						aStr[j].on("mouseleave",function(){
//							aStr[j].style.background='';
//						})
//					
//					}
				},
				dataType:"jsonp"
			});
		})
})
function anim(name){
	$(name).children('.body').find('li').on('mouseenter',function(){
			$(this).find('span').css({
				display:"block"
			}).stop(true,false).animate({
				top:($(this).height())*0.6
			},1000,function(){
				//这里的this指向改变了
				$(this).stop(true,false).animate({
					top:($(this).height()*3.95)
				},1000)
//				console.log(this)
			}).end().siblings().find('span').css({
				display:"none"
			})
		})
		$(name).children('.body').find('li').on('mouseleave',function(){
			$(name).children('.body').find('span').css({
				display:"none"
			})
		})
}
function lunbaner(name){
	$(name).banners({
			img:$(name).children(),
			left:$('.pre'),
			right:$('.nex'),
			autoPlay:false
		})
}
