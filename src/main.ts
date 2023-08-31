import { CanvasManager , canvas } from "./CanvasManager";
import { AABB } from "./Colliders";
import { Color } from "./Color"
import { render, renderedObjects } from "./Rendering";

let FRAMECOUNT=0;
CanvasManager.fullscreenCanvas(canvas);

let a = new AABB(180,20,550,800)
let b = new AABB(50,50,200,200)
//a.setRendering(true)
a.setRendering(true)
b.setRendering(true)

function draw() {
  let { width, height } = canvas;
  requestAnimationFrame(draw);
  CanvasManager.drawRect(0, 0, width, height,{
    filled:true,
    fill:Color.BLACK
  });
  
  for(let object of renderedObjects){
    render(object)
  }

  if(FRAMECOUNT%10==0){
    a.toggleRendering()
  }
  FRAMECOUNT++
}

draw();