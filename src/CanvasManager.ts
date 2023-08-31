import { Color } from "./Color";

export type drawOptions = {
  filled?: boolean;
  fill?: Color;
  stroked?: boolean;
  stroke?: Color;
};
export const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
export const ctx: CanvasRenderingContext2D = canvas.getContext(
  "2d"
) as CanvasRenderingContext2D;

export class CanvasManager {
  static fullscreenCanvas(canvas: HTMLCanvasElement) {
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  static setFill(color: Color): void;
  static setFill(hex: string): void;
  static setFill(r: number, g: number, b: number): void;
  static setFill(arg1: any, arg2?: any, arg3?: any) {
    if (arg1.constructor.name == "_Color") {
      ctx.fillStyle = arg1.toHex();
    } else if (arg2 != undefined) {
      ctx.fillStyle = `rgb(${arg1},${arg2},${arg3})`;
    } else {
      ctx.fillStyle = arg1;
    }
  }

  static setStroke(color: Color): void;
  static setStroke(hex: string): void;
  static setStroke(r: number, g: number, b: number): void;
  static setStroke(arg1: any, arg2?: any, arg3?: any) {
    if (arg1.constructor.name == "_Color") {
      ctx.strokeStyle = arg1.toHex();
    } else if (arg2 != undefined) {
      ctx.strokeStyle = `rgb(${arg1},${arg2},${arg3})`;
    } else {
      ctx.strokeStyle = arg1;
    }
  }

  static drawRect(
    x: number,
    y: number,
    w: number,
    h: number,
    options: drawOptions
  ) {
    if (options.filled == true) {
      CanvasManager.setFill(options.fill as Color);
      ctx.fillRect(x, y, w, h);
    }

    if (options.stroked == true) {
      CanvasManager.setStroke(options.stroke as Color);
      ctx.strokeRect(x, y, w, h);
    }
  }
}
