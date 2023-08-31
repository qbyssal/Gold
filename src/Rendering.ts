import { Color } from "./Color";
import { CanvasManager } from './CanvasManager'
export type renderType = {
  fill?: Color;
  stroke?: Color;
  filled?: boolean;
  stroked?: boolean;
};
export type renderOptions = {
  debug: number;
  renderType: renderType;
};
export interface Renderable {
  getRenderOptions(): renderOptions;
  getRenderType()
  getBounds()
  getId()
}

export interface RectangleRenderer {
}

export let renderedObjects=new Array<Renderable>()

export function render(thing:Renderable){
    if(thing.getRenderType()=="Rectangle"){
        let options=thing.getRenderOptions().renderType
        let bounds=thing.getBounds()
        CanvasManager.drawRect(bounds.x1,bounds.y1,bounds.x2-bounds.x1,bounds.y2-bounds.y1,options)
    }
}