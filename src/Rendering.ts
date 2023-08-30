import { Color } from './Color'
export type renderType={
    color:Color,
    filled?:boolean,
    border?:boolean
    borderType?:"solid"
}
export type renderOptions={
    debug:number,
    renderType:renderType
}
export interface Renderable{
    getRenderOptions():renderOptions
}

export interface RectangleRenderer{

}   