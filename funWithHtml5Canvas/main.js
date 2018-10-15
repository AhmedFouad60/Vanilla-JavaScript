//Get the canvas
const canvas=document.querySelector("#draw");
//specify the context of the canvas whether it's 2D or 3D
const ctx=canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle="#BaDA55";
ctx.lineJoin = "round";
ctx.lineCap="round";
ctx.lineWidth=100;


let isDrawing = false;
let lastX = 0;
let lastY= 0;
let hue = 0;
let direction = true;
// ctx.globalCompositeOperation = 'multiply';



function draw(e){
  if( !isDrawing) return //if the mouse moving in the canvas but the mouse not clicked
  
  ctx.strokeStyle= `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX,lastY);
  //go to 
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if(ctx.lineWidth >=100 || ctx.lineWidth <=1 ){
    direction = !direction;
  }

  if(direction){
    ctx.lineWidth++;
  }else{
    ctx.lineWidth--;
  }

}


canvas.addEventListener('mousedown',(e)=>{
  isDrawing = true;
  [lastX,lastY] = [e.offsetX,e.offsetY];
});

canvas.addEventListener('mouseup',(e)=>{
  isDrawing = false;
});

canvas.addEventListener('mouseout',(e)=>{
  isDrawing = false;
});

canvas.addEventListener('mousemove',draw);