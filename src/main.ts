import { fullscreenCanvas } from "./CanvasManager";
import { Color } from "./Color"
const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;


let time = 0;
fullscreenCanvas(canvas);

let c1=new Color(255,255,0)
let c2=new Color(255,127,127,50)
// let dayGen=lerp()
function draw() {
  let { width, height } = canvas;
  requestAnimationFrame(draw);
  ctx.fillStyle = "#000"
  ctx.fillRect(0, 0, width, height);
}

console.log(c1.toHex(),c2.toHex())

function* lerp(a:Color,b:Color,steps:number){

}
draw();
