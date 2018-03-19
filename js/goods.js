function getGoods(url,name){
	$.ajax(url).then(function(res){
				var json = res;
				var str = "";
				for(let i=0;i<json.length;i++){
					str += `<div class="goods">
					<div class="head"><span data-id="${json[i].goodsId}"> + 加入购物车</span><strong><img src="${json[i].carsrc}"/>${json[i].carpri}</strong></div>
						<img src="${json[i].imgsrc}">
						<p>${json[i].name}</p>
						<del>${json[i].del}</del>
						<p>${json[i].pri}</p>
				</div>`
				}
				$(name).html(str);
//				console.log( $(".allist").children(""));
				clickBtn(name);
			})	
}
