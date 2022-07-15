var canvas = document.getElementById("canvas");
var a = canvas.getContext("2d");
var color = 'blue';
var width = 2;
a.beginPath();
a.strokeStyle = color;
a.lineWidth = 2;
a.arc(200,200,45,0,2*Math.PI);
a.stroke();
canvas.addEventListener("mousedown",mousedown);
function mousedown(e)
{
    color = document.getElementById("color_input").value;
    width = document.getElementById("penwidth_input").value;
    mousex = e.clientX-canvas.offsetLeft;
    mousey = e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}
function circle(mousex,mousey)
{
    a.beginPath();
    a.strokeStyle = color;
    a.lineWidth = width;
    a.arc(mousex,mousey,45,0,2*Math.PI);
    a.stroke();
}