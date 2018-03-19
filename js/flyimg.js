var totalBtn1 = 0;
$(function(){
	
	
})
//mouseCover();
function clickBtn(name){
//	console.log( $(".allist").children(""));
    $(name).children(".goods").find("span").on('click',function(){
//  	$(this).getAttribute('data-id')
//  	console.log(1)
//		console.log(this);
		setCookie(this.getAttribute('data-id'),this.getAttribute('data-id'),10);
        var img = $(this).parent().parent().children('img');
        
        var flyImg = img.clone().css({'opacity':'0.6'});
        console.log(img.clone())
        $('body').append(flyImg);
        flyImg.css({
            'z-index':999,
            'border':'3px solid #fff',
            'position':'absolute',
            'height': img.height() + 'px',
            'width': img.width() + 'px',
            'top': img.offset().top + 'px',
            'left': img.offset().left + 'px'
        })
        flyImg.animate({
            'width':50 + 'px',
            'height': 50 + 'px',
            'border-radius': 100 + '%'
        },function (){
            var t;
       			t = ($('#goodscar').offset().top+40)+'px';
                totalBtn1 ++;
            flyImg.animate({
                'top': t,
                'left':($('#goodscar').offset().left+80) + 'px',
                'height':0 + 'px',
                'width': 0 + 'px'
            },1500,function(){
                flyImg.remove();
                $('#goodscar').find("span").html(totalBtn1);
                $(".goodsright").find('.rightnav').find('.cnav').find("strong").html(totalBtn1);
//              console.log(totalBtn1);
//              setCookie("goodsnum",totalBtn1,3)
            })
        })
    })
}