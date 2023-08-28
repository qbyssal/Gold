import { canvas, ctx, fullscreenCanvas, setFill } from "./CanvasManager";
import { Color } from "./Color"

fullscreenCanvas(canvas);

let c1=new Color(255,255,0)
let c2=new Color(255,127,127,50)
// let dayGen=lerp()
function draw() {
  let { width, height } = canvas;
  requestAnimationFrame(draw);
  setFill(Color.BLUE)
  ctx.fillRect(0, 0, width, height);
}

console.log(c1.toHex(),c2.toHex())

// function* lerp(a:Color,b:Color,steps:number){

// }
draw();
console.log(ctx.fillStyle)