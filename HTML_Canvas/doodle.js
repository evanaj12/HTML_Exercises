// js for canvas quiz


//globalvariables
var canvas;
var ctx;
var dragging=false;
var radius=5;
var color="black";

//function called when the page loads
function init(){
	canvas=document.getElementById("doodle");
	ctx=canvas.getContext("2d");

	canvas.onmousedown =function(event){
		event.preventDefault(); //prevents unwanted dragging of canvas
		dragging=true;
	};
	canvas.onmouseup = function(){
		dragging=false;
	};
	canvas.onmousemove= moved;
}

function moved(){
	var rect = canvas.getBoundingClientRect();
	var x = event.pageX - rect.left;
	var y = event.pageY - rect.top;

	if (dragging){
		
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.fillStyle=color;
		ctx.fill();
	}
}

