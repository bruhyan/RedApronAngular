
export class Step {
    stepId: number
    instruction : string
    imageSrc : string
    orderNum : number
    
   
    constructor(stepId?:number,instruction?: string, imageSrc?:string,orderNum?:number){
        this.stepId = stepId
        this.instruction = instruction
        this.imageSrc = imageSrc 
        this.orderNum = orderNum
    }
    
}