$(".list:nth-child(odd)").css("background","white");
$(".list:nth-child(2n)").css("background","rgb(224, 224, 224)");

$("#container").on("mouseenter",".list",function(){
	$(this).find(".trashicon").fadeIn(100);
});

$("#container").on("mouseleave",".list",function(){
	$(this).find(".trashicon").fadeOut(100);
});

$('#container').on("click",".list",function(){
    $(this).css("text-decoration","line-through");
	$(this).css("color","rgb(169, 169, 169)");
});

$("#container").on("click",".trashicon",function(){
     $(this).parent(".list").fadeOut(300,function(){
     	$(this).remove();
     	$(".list:nth-child(odd)").css("background","white");
		$(".list:nth-child(2n)").css("background","rgb(224, 224, 224)");
     });
});

$(".plusbtn").on("click",function(){
	$("input").slideToggle(200);
	$("input").css("background","rgb(224, 224, 224)");
});

$("input").on("click",function(){
	$("input").css("background","white");
	$("input").css("border","0.1px solid rgb(0, 0, 255)");
});

$("input").on("mouseleave",function(){
	$("input").css("background","rgb(224, 224, 224)");
	$("input").css("border","none");
});

$("input").on("keypress",function(){
	if(event.which===13){
		var newlist=$("input").val();
		var newlist2='<div class="list"><div class="trashicon"><i class="fas fa-trash-alt"></i></div><span>'+newlist+'</span></div>';
		$("#container").append(newlist2);
		$(".list:nth-child(odd)").css("background","white");
		$(".list:nth-child(2n)").css("background","rgb(224, 224, 224)");
		$("input").val("");

}
});

