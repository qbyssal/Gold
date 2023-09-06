import { CanvasManager , canvas } from "./rendering/CanvasManager";
import { AABB } from "./physics/Colliders";
import { Color } from "./rendering/Color"
import { render, renderedObjects } from "./rendering/Rendering";

let FRAMECOUNT=0;
let TICKCOUNT=0
let mspf=0;
let times:Array<number>=[]
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
  
  for(let i=0; i<1000; i){
    let a=i++
    a*=2
    for(let j=0; j<5000; j++){
      a+=j
    }
  }
  for(let object of renderedObjects){
    render(object)
  }

  if(FRAMECOUNT%10==0){
    a.toggleRendering()
  }
  FRAMECOUNT++




}

function* tickGen(){
  let t=0;
  while(true){  
    console.log(1000/((performance.now()-t)))
    t=performance.now()
    yield TICKCOUNT++
  }
}

let tick=tickGen()
setInterval(()=>{
  tick.next()
},50)
draw();