var input=document.querySelector("input");
var startclick=document.querySelector(".startclick");
var resetclick=document.querySelector(".resetclick");
var h1=document.querySelector("h1");
var colorshow=document.querySelector(".colorshow");
var colorshowtitle=document.querySelector(".colorshowtitle");
var block1=document.querySelector(".block1");
var block2=document.querySelector(".block2");
var block3=document.querySelector(".block3");
var block4=document.querySelector(".block4");
var block5=document.querySelector(".block5");
var block6=document.querySelector(".block6");
var block7=document.querySelector(".block7");
var block8=document.querySelector(".block8");
var block9=document.querySelector(".block9");






input.addEventListener("change",function(){
	var inputNumber=Number(input.value);
	if(inputNumber<1){
		alert("You should select one color at least!");
	}
	else if(inputNumber>9){
		alert("Please decrease number!");
	}
	startclick.textContent="start";
});

startclick.addEventListener("click",colorrandom);
resetclick.addEventListener("click",resetaction);

function colorrandom(){
   var random=[0];
   var colordisplayarray=[];
   var inputNumber=Number(input.value);
   var textdisplaycolor=surprisecolor();

   

	for(a=0;a<inputNumber;a++){

	   var randomNum=Math.floor((Math.random()*9)+1);

	   for(i=0;i<random.length;i++){
		   if(randomNum===random[i]){
			  var randomNum=Math.floor((Math.random()*9)+1);
			  var i=0;
	         }
		   }
	
		if(randomNum===1){var thecolor=surprisecolor();block1.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===2){var thecolor=surprisecolor();block2.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===3){var thecolor=surprisecolor();block3.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===4){var thecolor=surprisecolor();block4.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===5){var thecolor=surprisecolor();block5.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===6){var thecolor=surprisecolor();block6.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===7){var thecolor=surprisecolor();block7.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===8){var thecolor=surprisecolor();block8.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}
		if(randomNum===9){var thecolor=surprisecolor();block9.style.backgroundColor=thecolor;colordisplayarray.push(thecolor);}

		random.push(randomNum);
	
    }

    for(b=1;b<10;b++){
    	for(i=0;(i<random.length)&&(b!=random[i]);i++){
    		if(i===random.length-1){
    		   if(b===1){block1.style.backgroundColor= "white";}
				if(b===2){block2.style.backgroundColor= "white";}
				if(b===3){block3.style.backgroundColor= "white";}
				if(b===4){block4.style.backgroundColor= "white";}
				if(b===5){block5.style.backgroundColor= "white";}
				if(b===6){block6.style.backgroundColor= "white";}
				if(b===7){block7.style.backgroundColor= "white";}
				if(b===8){block8.style.backgroundColor= "white";}
				if(b===9){block9.style.backgroundColor= "white";}	
    		}
    	}
    }

    h1.classList.add("head");

    startclick.textContent="You can click again";
    colorshowtitle.textContent="The random colors that were selected as below: ";
	colorshow.textContent=colordisplayarray;

  	colorshowtitle.style.color= textdisplaycolor;
    colorshow.style.color=textdisplaycolor;
    


};

function resetaction(){
    var resetcolor=surprisecolor();
	block1.style.backgroundColor=resetcolor;
	block2.style.backgroundColor=resetcolor;
 	block3.style.backgroundColor=resetcolor;
	block4.style.backgroundColor=resetcolor;
	block5.style.backgroundColor=resetcolor;
	block6.style.backgroundColor=resetcolor;
	block7.style.backgroundColor=resetcolor;
	block8.style.backgroundColor=resetcolor;
	block9.style.backgroundColor=resetcolor;

	colorshowtitle.textContent=" ";
	colorshow.textContent=" ";

	h1.classList.remove("head");
	startclick.textContent="start";
	input.value=1;
}


function surprisecolor(){
	var A=Math.floor(Math.random()*256);
	var B=Math.floor(Math.random()*256);
	var C=Math.floor(Math.random()*256);

	var RGB="rgb("+A+", "+B+", "+C+")";
	
	return RGB;

};








