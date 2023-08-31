import { Color } from './Color';
import {RectangleRenderer, Renderable, renderOptions, renderedObjects} from './Rendering'
export class AABB implements Renderable,RectangleRenderer{
    private rendering:boolean=false;
    private x1:number;
    private y1:number;
    private x2:number;
    private y2:number;
    private id:number
    
    private static STATIC_ID:number=0
    public static colliders:AABB[]=[]

    constructor(x1:number,y1:number,x2:number,y2:number){
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
        this.id=AABB.STATIC_ID++
    }

    public static getColliders(){
        return AABB.colliders
    }

    public static addCollider(collider:AABB){
        AABB.colliders.push(collider)
    }

    public getBounds(){
        return {
            x1:this.x1,
            y1:this.y1,
            x2:this.x2,
            y2:this.y2,
        }
    }
    public isColliding(x:number,y:number):boolean
    public isColliding(collider:AABB):boolean
    public isColliding(arg1:number|AABB,arg2?:number):boolean{
        if(arg1.constructor.name=="number"){
            return this.isCollidingXY(arg1 as number,arg2 as number)
        }else if(arg1.constructor.name=="AABB"){
            return this.isCollidingAABB(arg1 as AABB)
        }
        return false
    }

    private isCollidingAABB(collider:AABB):boolean{
        let otherBounds=collider.getBounds()
        let thisBounds=this.getBounds()
        return thisBounds.x2>otherBounds.x1&&thisBounds.x1<otherBounds.x2&&thisBounds.y2>otherBounds.y1&&thisBounds.y1<otherBounds.y2
    }
    private isCollidingXY(x:number,y:number):boolean{
        let thisBounds=this.getBounds()
        return thisBounds.x2>x&&thisBounds.x1<x&&thisBounds.y2>y&&thisBounds.y1<y
    }

    public getRenderOptions(): renderOptions {
        return {
            debug:0b01,
            renderType:{
                stroked:true,
                filled:false,
                stroke:Color.GREEN
            }
        }
    }

    public setRendering(bool:boolean){
        if(bool==true && this.rendering==false){
            renderedObjects.push(this)
        }else if(bool==false && this.rendering==true){
            for(let i=0; i<renderedObjects.length; i++){
                if(renderedObjects[i].getId()==this.id){
                    renderedObjects.splice(i,1)
                }
            }
        }
        this.rendering=bool;
    }

    public isRendering():boolean{
        return this.rendering
    }

    public toggleRendering(){
        this.setRendering(!this.isRendering())
    }

    public getRenderType() {
        return "Rectangle"
    }

    public getId():number{
        return this.id
    }
}

export class Collider{
    public static aabb=AABB.colliders
}