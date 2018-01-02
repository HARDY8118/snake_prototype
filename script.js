var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x=(canvas.width/2);
var y=(canvas.height/2);
var rx;
var ry;
var dx=2;
var dy=2;
var lpress = false;
var rpress = false;
var dpress = false;
var upress = false;
var rx=Math.random()*480;
var ry=Math.random()*320;
var dl=document.getElementById('lvl');
var val=0;


document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);

/*
function level(){
dx=dl;
dy=dl;
draw();
}
*/

function keyDownHandler(e){
if(e.keyCode==39) 
	{rpress = true;}
else if(e.keyCode == 37) 
	{lpress = true;}
else if(e.keyCode == 38)
	{upress = true;}
else if(e.keyCode == 40)
	{dpress = true;}
}

function keyUpHandler(e){
if(e.keyCode == 39) 
	{rpress = false;}
else if(e.keyCode == 37) 
	{lpress = false;}
else if(e.keyCode == 38) 
	{upress = false;}
else if(e.keyCode == 40) 
	{dpress = false;}
}




function dr(){
ctx.beginPath();
ctx.rect(x, y, 40, 40);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
}

function rd(){
val++;
S.score.value=val;
rx=Math.random()*480;
ry=Math.random()*320;
dx++;
dy++;
}

function fd(){
ctx.beginPath();
ctx.arc(rx, ry, 19, 0, Math.PI*2);
ctx.fillStyle = "#0000FF";
ctx.fill();
ctx.closePath();
}
function ds(){
if(y+40>=ry && y<=ry+20 && x+40>=rx && x<=rx+40)
	{
	 rd();
	}

}

function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
dr();
fd();
ds();
     if(x+40==canvas.width || x==0 || y+40>=540 || y<=0) 
	{
	 document.location.reload();
         alert("Over");
	 alert("Your Score "+val);
	}

 if(rpress) 
	{x+=dx;}
else if(lpress) 
	{x-=dx;}
else if(upress) 
	{y-=dy;}
else if(dpress) 
	{y+=dy;}
}


setInterval(draw, 10);