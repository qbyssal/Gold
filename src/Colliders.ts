export class AABB{
    private x1:number;
    private y1:number;
    private x2:number;
    private y2:number;

    public static colliders:AABB[]=[]

    constructor(x1:number,y1:number,x2:number,y2:number){
        this.x1=x1;
        this.y1=y1;
        this.x2=x2;
        this.y2=y2;
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
            return this.isCollidingXY(arg1,arg2)
        }else if(arg1.constructor.name=="AABB"){
            return this.isCollidingAABB(arg1)
        }
        return false
    }

    private isCollidingAABB(collider:unknown):boolean{
        let otherBounds=(collider as AABB).getBounds()
        let thisBounds=this.getBounds()
        return thisBounds.x2>otherBounds.x1&&thisBounds.x1<otherBounds.x2
    }
    private isCollidingXY(x:unknown,y:unknown):boolean{
        x = x as number
        y = y as number

        return false;
    }

}

export class Collider{
    public static aabb=AABB.colliders
}