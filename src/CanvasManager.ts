import { Color } from "./Color";

export const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

export function fullscreenCanvas(canvas: HTMLCanvasElement) {
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

export function setFill(color: Color): void;
export function setFill(hex: string): void;
export function setFill(r: number, g: number, b: number): void;
export function setFill(arg1: any, arg2?: any, arg3?: any) {
  if (arg1.constructor.name == "Color") {
    ctx.fillStyle = arg1.toHex();
  } else if (arg2 != undefined) {
    ctx.fillStyle = `rgb(${arg1},${arg2},${arg3})`;
  } else {
    ctx.fillStyle = arg1;
  }
}
