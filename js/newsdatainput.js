$(document).ready(function(){
	var content="";
	$.ajax({
	   url: "src/data.json",//json文件位置
	   type: "GET",//请求方式为get
	   dataType: "json", //返回数据格式为json
	   success: function(data) {//请求成功完成后要执行的方法 
	       //each循环 使用$.each方法遍历返回的数据date
	       $.each(data.result, function(i, item) {
			   var title='<div class="hot_news_item"><div class="hot_news_item_content"><div class="hot_news_item_title">'+item.title+'</div><div class="hot_news_item_author">'+item.author+'</div><div class="hot_news_item_time">2020-'+item.time+'发布</div><div class="hot_news_item_status">'+item.status_DISPLAY+'</div></div><div class="hot_news_item_pic"><img src='+item.img+' /></div></div>';
	            document.getElementById("hot_news_list").innerHTML= document.getElementById("hot_news_list").innerHTML+title;
	       })
	   },
	   error:function(){
			console.log(1);
	   }
	})
// 	$('.hot_news_item').each(function(){
// 		$(this).click(function(){
// 			alert(1);
// 		});
// 	});
// 	$('hot_news_item').on('click',function(){
// 		alert(1);
// 	});

});
